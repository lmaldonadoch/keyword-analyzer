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

    <div>
      <b-table striped hover :items="apiResult"></b-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
  name: 'keywordsearch',
  data() {
    return {
      apiResult: [],
      keyword: '',
    };
  },
  methods: {
    async statistics() {
      (this.apiResult = []),
        axios
          .post('http://localhost:5000/new', { keyword: this.keyword })
          .then((response) => {
            JSON.parse(response.data).default.timelineData.forEach((object) => {
              console.log(object.formattedTime, object.value);
              this.apiResult.push({
                date: object.formattedTime,
                value: object.value,
              });
            }, console.log(this.apiResponse));
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>

<style></style>
