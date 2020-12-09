<template>
  <div>
    <h2>Receipts Table</h2>
    <table>
      <thead>
      <tr>
        <th>Receipt</th>
        <th>Date</th>
        <th>Category</th>
        <th>Store Name</th>
        <th>Amount</th>
      </tr>
      </thead>
      <Receipt v-for="receipt in getReceipts"
        v-bind:key="receipt._id"
        v-bind:receipt="receipt"/>
    </table>
    <br>
    <a href='/'>Upload New Receipt</a>
  </div>
</template>

<script>
import {Receipts} from "../../api/collections/Receipts";
import Receipt from './Receipt.vue';

export default {
  components: {
    Receipt
  },
  data() {
    return {}
  },
  methods: {},
  meteor: {
    getReceipts() {
      let userID = Meteor.userId();
      if(userID) {
        return Receipts.find({userId: userID}).fetch();
      }
      else{
        return {};
      }
    }
  }
}
</script>

<style scoped>
ul {
  font-family: monospace;
}
table {
  width: 100%;
}
table { border: 1px solid black; border-collapse: collapse; }

th, td { padding: 2px 5px; border: 1px solid black; }

thead { background: #ddd; }

</style>
