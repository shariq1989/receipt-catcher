<template>
  <div>
    <h1>Receipt Catcher</h1>
    <nav-menu/>
    <template v-if="currentUser">
      <router-view/>
    </template>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import Upload from "./components/Upload";
import Display from "./components/Display";
import NavMenu from "./components/NavMenu";

export default {
  components: {
    Upload,
    Display,
    NavMenu
  },
  meteor: {
    currentUser() {
      return Meteor.user();
    }
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
  #login-buttons {
    margin-bottom: 5px;
  }
  #login-buttons a {
    text-decoration: none;
  }
</style>
