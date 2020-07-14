<template>
  <div>
    <div id="nav">
      <span v-if="loggedIn">
        <a class="router-link" @click="signOut">
          Sign out
        </a>
      </span>
      <span v-else>
        <router-link to="/login">Log in</router-link>
        <router-link to="/register">Register</router-link>
      </span>
      <router-link to="/keywordsearch">Main</router-link>
    </div>
    <div></div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: 'login' });
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
};
</script>

<style>
a:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
