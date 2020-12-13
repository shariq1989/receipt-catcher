<template>
  <div>

    <h2>Details</h2>

    <div v-if="this.receipts[0] !== undefined" id='metadata'>
      <p>Store Name:</p> {{this.receipts[0].meta.storeName}}
      <p>Date:</p> {{this.receipts[0].meta.date}}
      <p>Category:</p> {{this.receipts[0].meta.category}}
      <p>Total Spent:</p> {{this.receipts[0].meta.totalSpent}}
      <img src=SomeImagePathHere></img> <!-- NEEDS A WORKING IMAGE PATH -->
      <!-- <el-button>Edit</el-button> -->
    </div>
    <a href="/receipts">Return to Table</a>
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

  },
  meteor: {
    getReceipts() {
      let receiptId = window.location.pathname.split('/')[2];
      if (receiptId) {
        this.receipts = Receipts.find({_id: receiptId}).fetch();
      } else {
        return {};
      }
    }
  }
}
</script>
