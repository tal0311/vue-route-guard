<template>
  <section class="user-page">
    <div class="user-img">
      <img src="./../assets/tal-profile-croped.jpg" alt="" />
    </div>
    <div class="info">
      <h3>{{ user.username }}</h3>
      <p>This user got here from a route guard in the router.js file</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "user-page",
  created() {
    this.user = this.$route.query;
  },
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style>
.user-img {
  height: 200px;
  width: 200px;
  margin: auto;
}
.user-img img {
  box-shadow: 0 0 3px 0px #a2a2a2;
  width: 100%;
  border-radius: 50%;
}
</style>