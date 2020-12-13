<template>
  <div>
    <h2>Details</h2>
    <div v-if="this.receipts[0] !== undefined  & this.editing == 0" id='metadata'>
      <p>Store Name: {{this.receipts[0].meta.storeName}}</p>
      <p>Date: {{this.receipts[0].meta.date}}</p>
      <p>Category: {{this.receipts[0].meta.category}}</p>
      <p>Total Spent: {{this.receipts[0].meta.totalSpent}}</p>

    </div>
    <div v-if="this.editing == 1">
      <p>Update Form Goes Here</p>
      <form @submit="formSubmit">
        <input id="file" type="file"><br>
        <label for="Store">Store Name: </label><input type="text" id="Store"><br>
        <label for="Date">Date of Purchase: </label><input type="date" id="Date" ref="Date"><br>
        <label for="Total">Total Spent: </label><input type="text" id="Total"><br>
        <label for="Category">Category: </label><input type="text" id="Category"><br>
        <input type='hidden' id='Id' :value="this.receipts[0]._id">
        <input type="submit" value="Submit">
      </form>
    </div>
    <el-button @click.native.prevent="Editing()">Edit</el-button>
    <div>
      <a href="/receipts">Return to Table</a>
    </div>
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
      editing: 0,
    }
  },
  methods: {
    Editing(){
      if (this.editing==0){
        this.editing=1;
      }
      else{
        this.editing=0;
      }
      console.log(this.editing)
    },
    formSubmit(e) {
      e.preventDefault();
      //Create JSON object from form data
      let data = {
        "Store": e.target.Store.value,
        "Total": e.target.Total.value,
        "Date": e.target.Date.value,
        "Category": e.target.Category.value,
        "Id": e.target.Id.value,
        "file": e.target.file.files[0],
      };
      console.log(data); //Confirm form data
      // Submit to database
      this.deleteReceipts(data);
      setTimeout(this.updateReceipt(data), 3000)

    },
    deleteReceipts(receipt) {
      Receipts.remove({_id: receipt.Id}, (error) => {
        if (error) {
          console.error(`File wasn't removed, error:  ${error.reason}`);
        } else {
          console.info('File successfully removed');
        }
      });
    },
    updateReceipt(obj) {
      let upload = Receipts.insert({
        file: obj.file,
        fileId: obj.Id,
        meta: {
          "category": obj.Category,
          "date": obj.Date,
          "storeName": obj.Store,
          "totalSpent": obj.Total,
        },
        streams: 'dynamic',
        chunkSize: 'dynamic',
      }, false);
      upload.on('start', function () {
        //TODO: Sets upload progress
        //template.currentUpload.set(this);
      });
      upload.on('end', function (error, fileObj) {
        if (error) {
          alert(`Error during upload: ${error}`);
        } else {
          alert(`File "${fileObj.name}" successfully uploaded`);
        }
        // removes upload progress
        //template.currentUpload.set(false);
      });
      upload.start();
      // Clear form
      this.image = null;
    }
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
