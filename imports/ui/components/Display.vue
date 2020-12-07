<template>
  <div>
    <h2>Receipts Table</h2>
    <ul>
      <Receipt
        v-for="receipt in getReceipts"
        v-bind:key="receipt._id"
        v-bind:receipt="receipt"
      />
    </ul>
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
</style>
