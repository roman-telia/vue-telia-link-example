<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './components/Navigation.vue';
export default {
  name: "App",
  components: {
    NavigationBar,
  },
};
</script>

<style></style>
