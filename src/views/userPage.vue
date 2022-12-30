<template>
  <section class="user-page">
    <h1>user page</h1>
  </section>
</template>

<script>
export default {
  name: "user-page",
  created() {
    this.user = this.$route.query.user;
  },
  data() {
    user: null;
  },
};
</script>

<style>
</style>