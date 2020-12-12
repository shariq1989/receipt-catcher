<template>
  <div>

    <h2>Details</h2>
    <div id='metadata'>
      <p>Store Name:</p>
      <p>Date:</p>
      <p>Category:</p>
      <p>Total Spent:</p>
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
    getReceipt(){
      let receiptId = window.location.pathname.split('/')[2];
      this.receipts = Receipts.find({_id: receiptId}).fetch();
    }
  }
}
</script>
