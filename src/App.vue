<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Log in</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/keywordsearch">Main</router-link>
    </div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: { Header: Header },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
