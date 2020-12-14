<template>
  <div>
    <header>
      <h1>Receipt Catcher</h1>
    </header>
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
    font-family: Arial, sans-serif;
    padding: 10px;
  }
  h1{
    font-family: Georgia, sans-serif;
    font-size: 3em;
    letter-spacing: -2px;
    color: darkcyan;
  }
</style>
