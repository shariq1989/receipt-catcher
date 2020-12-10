<template>
  <div>
    <h2>Receipts Table</h2>
    <el-table
    :data="receipts"
    style="width: 100%">
      <el-table-column
          prop="name"
          label="Name"
      >
      </el-table-column>
      <el-table-column
          prop="meta.date"
          label="Date"
          sortable
          >
      </el-table-column>
      <el-table-column
          prop="meta.category"
          label="Category"
          sortable>
      </el-table-column>
      <el-table-column
          prop="meta.storeName"
          label="Store Name"
          sortable>
      </el-table-column>
      <el-table-column
          prop="meta.totalSpent"
          label="Total Spent"
          sortable>
      </el-table-column>
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
    </el-table>
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
      Receipts.remove({_id: receipt._id}, (error) => {
        if (error) {
          console.error(`File wasn't removed, error:  ${error.reason}`);
        } else {
          console.info('File successfully removed');
        }
      });
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
