<template>
  <div>
    <!-- Upload receipt form -->
      <h2>Select an image</h2>
    <el-form label-width="200px">
      <el-upload
          class="upload-demo"
          action="placeholder"
          :limit="1">
        <el-button id="file" size="small" type="file">Click to upload</el-button>
        <span slot="tip" class="el-upload__tip"> png/jpg/jpeg files, with size less than 10MB</span>
      </el-upload>
      <el-form-item label="Store name">
        <el-input for="Store" id="Store"></el-input>
      </el-form-item>
      <el-form-item label="Date of Purchase">
        <el-date-picker
            for="Date" id="Date"
            type="date">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Total Spent">
        <el-input for="Total" id="Total"></el-input>
      </el-form-item>
      <el-form-item label="Category">
        <el-input for="Category" id="Category"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="submit" @click="formSubmit">Submit</el-button>
      </el-form-item>
    </el-form>
    </br>
    <a href='/receipts'>My Receipts</a>
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
/*    let today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth()+1,
        yyyy = today.getFullYear();

    dd = dd < 10 ? dd='0'+dd : dd;

    mm = mm < 10 ? mm='0'+mm : mm;

    today = yyyy+'-'+mm+'-'+dd;

    let date = this.$refs.Date;
    date.setAttribute('max',today);*/
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      //get values from form
      const Store = e.target.Store.value;
      const Total = e.target.Total.value;
      const Date = e.target.Date.value;
      const Category = e.target.Category.value;
      let file = e.target.file.files[0];
      //Create JSON object
      let data = {
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
    uploadAnotherReceipt: function () {
      this.image = null;
    },
    uploadReceipt(obj) {
      let image = obj.file;
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
