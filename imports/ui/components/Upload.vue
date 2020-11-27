<template>
  <div>
    <!-- Upload receipt form -->
    <div v-if="!image">
      <h2>Select an image</h2>
      <div id="ReceiptForm">
        <form @submit="formSubmit">
          <input id="file" type="file" ></br>
          Store Name: <input type="text" id="Store"></br>
          Date of Purchase: <input type="date" id="Date" ref="Date"></br>
          Total Spent: <input type="text" id="Total"></br>
          Category: <input type="text" id="Category"></br>
          <input type="submit" value="Submit">
        </form>
      </div>
      <!-- <input type="file" @change="onFileChange"> Saved for posterity-->
    </div>
    <!-- Displayed after upload complete -->
    <div v-else>
      <img :src="image" alt="uploaded image"/>
      <button @click="uploadAnotherReceipt">Upload another</button>
    </div>
  </div>
</template>

<script>
import {Receipts} from "../../api/collections/Receipts";

export default {
  data() {
    return {
      counter: 0,
      image: null
    }
  },
  mounted() {
    let today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth()+1,
        yyyy = today.getFullYear();

    dd = dd < 10 ? dd='0'+dd : dd;

    mm = mm < 10 ? mm='0'+mm : mm;

    today = yyyy+'-'+mm+'-'+dd;

    let date = this.$refs.Date;
    date.setAttribute('max',today);
  },
  methods: {

    formSubmit(e){
      e.preventDefault();
      //get values from form
      const Store = e.target.Store.value;
      const Total = e.target.Total.value;
      const Date = e.target.Date.value;
      const Category = e.target.Category.value;
      let file = e.target.file.files[0];
      //Create JSON object
      data = {
        "Store": Store,
        "Total": Total,
        "Date": Date,
        "Category": Category,
        "file": file,
      };
      //console.log(data); //Confirm form data
      // Submit to database
      this.uploadReceipt(data);
    },

    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      if (e.currentTarget.files && e.currentTarget.files[0]) {
        let file = e.currentTarget.files[0];
        console.log(file);
        this.uploadReceipt(file)
      }
      this.displayImage(files[0]);
    },

    displayImage(e) {
      console.log(e);
      let fileObjToSubmit = e.currentTarget.files[0];
      console.log(e.currentTarget.files[0]);
      return fileObjToSubmit;
      const reader = new FileReader();
      const vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    uploadAnotherReceipt: function () {
      this.image = null;
    },
    uploadReceipt(obj) {
      image = obj.file;
      console.log(image);
      let upload = Receipts.insert({
        file: image,
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
}
</script>

<style scoped>
img {
  width: 30%;
  display: block;
  margin: auto auto 10px;
}

p {
  font-family: serif;
}

p {
  font-family: serif;
}
</style>
