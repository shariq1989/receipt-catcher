<template>
  <div>
    <el-menu 
      mode="horizontal" 
      :router="true"
      :default-active="$route.path"
    >
      <el-menu-item v-if="currentUser" index="/receipts">View</el-menu-item>
      <el-menu-item v-if="currentUser" index="/">Upload</el-menu-item>
      <el-menu-item>
        <blaze-template template="loginButtons" tag="span"></blaze-template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  meteor: {
    currentUser() {
      return Meteor.user();
    }
  }
}
</script>

<style>
  .accounts-dialog label {
    display: block !important;
  }
  .login-link-text {
    padding: 18px 0;
  }
  #login-buttons {
    margin-bottom: 5px;
  }
  #login-buttons a {
    text-decoration: none;
  }
</style>