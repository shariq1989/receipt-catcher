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
        <th>Delete</th>
      </tr>
      </thead>
      <tr v-for="receipt in receipts" v-bind:key="receipt._id"
          v-bind:receipt="receipt">
        <td><a :href="'/receipts/'+receipt._id">{{ receipt.name }}</a></td>
        <td>{{ receipt.meta.date }}</td>
        <td>{{ receipt.meta.category }}</td>
        <td>{{ receipt.meta.storeName }}</td>
        <td>{{ receipt.meta.totalSpent }}</td>
        <td>
          <button v-on:click="deleteReceipts(receipt)">X</button>
        </td>
      </tr>

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
    return {
      receipts: null,
    }
  },
  methods: {
    deleteReceipts(receipt) {
      console.log(receipt);
      let res = Receipts.remove(receipt._id);
      console.log(res);
    }
  },
  meteor: {
    getReceipts() {
      let userID = Meteor.userId();
      if (userID) {
        this.receipts = Receipts.find({userId: userID}).fetch();
      } else {
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

table {
  border: 1px solid black;
  border-collapse: collapse;
}

th, td {
  padding: 2px 5px;
  border: 1px solid black;
}

thead {
  background: #ddd;
}

</style>
