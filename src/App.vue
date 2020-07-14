<template>
  <div id="app">
    <Header />
    <transition
      name="view"
      appear
      enter-active-class="animate__animated animate__zoomInRight delay"
      leave-active-class="animate__animated animate__zoomOutLeft"
    >
      <router-view />
    </transition>
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
  background: #fdd32a;
  a {
    font-weight: bold;
    color: #fff;
    padding: 10px;
    &.router-link-exact-active {
      color: #7480ff;
    }
  }

  .delay {
    animation-delay: 0.5s;
  }
}
</style>
