<template>
  <div>
    <!-- Upload receipt form -->
    <div>
      <h2>Select an image</h2>
      <el-form 
        label-position="right" 
        label-width="120px" 
        :model="formModel">

        <el-form-item label="Image">
          <el-upload
            ref="upload"
            action="#"
            :auto-upload="false"
            :multiple="false"
            :limit="1"
            :on-change="setFileUrl">
            <el-button slot="trigger" size="small" type="primary">Select File</el-button>
            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="Store">
          <el-input
            id="store"
            type="text"
            minlength="1"
            maxlength="50"
            style="width: 20%"
            v-model="formModel.store"
          ></el-input>
        </el-form-item>
        <el-form-item label="Date">
          <el-date-picker
            id="date"
            type="date"
            placeholder="Pick a day"
            v-model="formModel.date"
            :pickerOptions="pickerOptions"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="Total">
          <el-input
            id="total"
            type="number"
            min="0"
            step=".01"
            style="width: 20%"
            v-model="formModel.total"
          ></el-input>
        </el-form-item>
        <el-form-item label="Category">
          <el-input
            id="category"
            type="text"
            minlength="1"
            maxlength="50"
            style="width: 20%"
            v-model="formModel.category"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="formSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {Receipts} from "../../api/collections/Receipts";

export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      formModel: {
        image: "",
        store: "",
        date: "",
        total: "",
        category: ""
      }
    }
  },
  methods: {
    setFileUrl(file, fileList) {
      this.formModel.image = fileList[0].raw;
    },
    formSubmit(e) {
      e.preventDefault();
      // Submit to database
      this.uploadReceipt();
    },
    uploadAnotherReceipt: function () {
      this.formModel.image = null;
    },
    uploadReceipt() {
      let upload = Receipts.insert({
        file: this.formModel.image,
        meta: {
          "category": this.formModel.category,
          "date": this.formModel.date.toISOString().substring(0,10),
          "storeName": this.formModel.store,
          "totalSpent": this.formModel.total,
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
      });
      upload.start();
      // Clear form
      this.$refs.upload.clearFiles();
      this.formModel.image = null;
      this.formModel.total = "";
      this.formModel.category = "";
      this.formModel.date = "";
      this.formModel.store = "";
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

</style>
