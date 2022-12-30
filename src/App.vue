<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Vue.js routes gaurd</h1>
  <nav class="flex space-evenly">
    <router-link to="/user">User</router-link>
    <router-link to="/">Home</router-link>
  </nav>
  <main class="main-view">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex {
  display: flex;
}
.main-view {
  margin-top: "1rem";
}
.flex.space-evenly {
  justify-content: space-evenly;
}
</style>
