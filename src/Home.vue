<template>
  <div id="app">
      <h1>Home page</h1>
    <LocalDatePicker />
  </div>
</template>

<script>
import LocalDatePicker from "./components/LocalDatePicker.vue";

export default {
  name: "Home",
  components: {
    LocalDatePicker,
  },
};
</script>

<style></style>
