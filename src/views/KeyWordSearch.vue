<template>
  <div>
    <form @submit.prevent="statistics">
      Api request

      <div class="keyword">
        <input
          type="text"
          v-model="keyword"
          placeholder="keyword to look for"
        />
      </div>

      <button type="submit">Look</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
  name: 'keywordsearch',
  data() {
    return {
      apiResult: null,
      keyword: '',
    };
  },
  methods: {
    async statistics() {
      axios
        .get('http://localhost:5000/new')
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
