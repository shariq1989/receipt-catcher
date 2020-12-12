<template>
  <div>
    <h2>Receipts Table</h2>
    <el-table
        :data="receipts"
        style="width: 100%">
      <el-table-column
          label="Name"
          prop="name"
      >
      <template slot-scope="scope">
          <span class="name">
            <a :href="'/receipts/'+scope.row._id">{{ scope.row.name }}</a>
          </span>
      </template>
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
      <el-table-column
          label="Delete">
        <template slot-scope="scope">
          <el-button
              @click.native.prevent="deleteReceipts(scope.row)"
              type="text"
              size="small">
            Remove
          </el-button>
        </template>
      </el-table-column>
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
    },
    openImage(receipt) {
      let link = Receipts.findOne({_id: receipt._id}).link();
      window.open(link);
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
