<template>
  <div>
    <form @submit.prevent="pressed">
      <div class="email">
        <input type="text" v-model="email" placeholder="Email" />
      </div>

      <div class="password">
        <input type="password" v-model="password" placeholder="Password" />
      </div>

      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">
      {{ error.messasge }}
    </div>
    <span>
      Not a member yet?
      <router-link to="/register">Register for free!</router-link>
    </span>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async pressed() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: 'keywordsearch' });
        console.log(val);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: lightcoral;
  font-size: 18px;
}

input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
  height: 30px;
}

button {
  background-color: #7480ff;
  margin: 20px 0 0;
  padding: 15px 30px;
  border: none;
  color: #fff;
  width: 400px;
}
</style>
