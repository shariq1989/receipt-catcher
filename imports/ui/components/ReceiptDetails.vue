<template>
  <div>
    <h2>Receipt Details</h2>
    <el-form 
      label-position="right" 
      label-width="120px" 
      :model="formModel"
    >
      <el-form-item label="Image">
        <el-upload
          ref="upload"
          action="#"
          :disabled="!editing" 
          :auto-upload="false"
          :multiple="false"
          :limit="1"
          :on-change="setFileUrl">
          <el-button slot="trigger" :disabled="!editing" size="small" type="primary">Select File</el-button>
          <div class="el-upload__tip" slot="tip">
            jpg/png files with a size less than 500kb<br>
            <em>Must add file, even if not updating</em>
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="Store Name">
        <el-input 
          id="store" 
          type="text" 
          :disabled="!editing" 
          v-model="formModel.store"
        ></el-input>
      </el-form-item>
      <el-form-item label="Date">
        <el-date-picker
          id="date"
          type="date"
          :disabled="!editing" 
          placeholder="Pick a day"
          v-model="formModel.date"
          :pickerOptions="pickerOptions"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="Total Spent">
        <el-input 
          id="total" 
          type="text" 
          :disabled="!editing" 
          v-model="formModel.total"
        ></el-input>
      </el-form-item>
      <el-form-item label="Category">
        <el-input 
          id="category" 
          type="text" 
          :disabled="!editing" 
          v-model="formModel.category"
          ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="!editing" type="primary" @click.native.prevent="toggleEditing()">Edit</el-button>
        <div v-else>
          <el-button type="primary" @click="formSubmit">Submit</el-button>
          <el-button type="info" plain @click.native.prevent="toggleEditing()">Cancel</el-button>
        </div>
      </el-form-item>
    </el-form>
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
      receipt: null,
      editing: false,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      formModel: {
        "store": "",
        "total": "",
        "date": "",
        "category": "",
        "id": "",
        "file": null
      }
    }
  },
  watch: {
    receipt: function(newReceipt, oldReceipt) {
      if (newReceipt && newReceipt.meta) {
        this.formModel.store = newReceipt.meta.storeName;
        this.formModel.date = newReceipt.meta.date;
        this.formModel.category = newReceipt.meta.category;
        this.formModel.total = newReceipt.meta.totalSpent;
      }
    }
  },
  methods: {
    setFileUrl(file, fileList) {
      this.formModel.file = fileList[0].raw;
    },
    toggleEditing() {
      this.editing = !this.editing;
    },
    formSubmit(e) {
      e.preventDefault();
      // Submit to database
      this.deleteReceipts();
    },
    deleteReceipts() {
      Receipts.remove({_id: this.formModel.id}, (error) => {
        if (error) {
          alert(`File wasn't removed, error:  ${error.reason}`);
        } else {
          this.replaceReceipt();
        }
      });
    },
    replaceReceipt() {
      let upload = Receipts.insert({
        file: this.formModel.file,
        fileId: this.formModel.id,
        meta: {
          "category": this.formModel.category,
          "date": this.formModel.date.toISOString().substring(0,10),
          "storeName": this.formModel.store,
          "totalSpent": this.formModel.total,
        },
        streams: 'dynamic',
        chunkSize: 'dynamic',
      }, false);
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
      this.toggleEditing();
    }
  },
  meteor: {
    getReceipts() {
      let receiptId = window.location.pathname.split('/')[2];
      if (receiptId) {
        this.formModel.id = receiptId;
        this.receipt = Receipts.find({_id: receiptId}).fetch()[0];
      } else {
        return;
      }
    }
  }
}
</script>

<style>
.el-input.is-disabled .el-input__inner {
  color: #606266;
}
</style>