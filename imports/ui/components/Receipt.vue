<template>
  <!--    <li><a :href="'/receipts/'+this.receipt._id">{{this.receipt._id}}</a></li>-->
  <tr>
    <td><a :href="'/receipts/'+this.receipt._id">{{ this.receipt.name }}</a></td>
    <td>{{ this.receipt.meta.date }}</td>
    <td>{{ this.receipt.meta.category }}</td>
    <td>{{ this.receipt.meta.storeName }}</td>
    <td>{{ this.receipt.meta.totalSpent }}</td>
    <td>
      <button v-on:click="deleteReceipts(this.receipt.name)">X</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["receipt"],
  data() {
    return {
      receipts: null,
    };
  },
  methods: {
    deleteReceipts(receipt) {
      console.log(receipt);
    }
  },
}
</script>

<style scoped>
th, td {
  padding: 2px 5px;
  border: 1px solid black;
  text-align: center
}
</style>