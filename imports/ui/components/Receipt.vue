<template>
    <li><a :href="'/receipts/'+this.receipt._id">{{this.receipt._id}}</a></li>
</template>

<script>
export default {
    props: ["receipt"],
    data() {
        return {};
    }
}
</script>
