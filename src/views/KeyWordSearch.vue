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

    <div class="row container-fluid">
      <div class="col-6" v-if="apiResult.length > 0">
        <line-chart :data="chartData"></line-chart>
      </div>
      <b-table striped hover :items="apiResult" class="col-6"></b-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Line } from 'vue-chartjs';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
  extends: Line,
  name: 'keywordsearch',
  data() {
    return {
      apiResult: [],
      keyword: '',
      chartData: {},
    };
  },
  methods: {
    async statistics() {
      (this.apiResult = []),
        axios
          .post('http://localhost:5000/new', { keyword: this.keyword })
          .then((response) => {
            JSON.parse(response.data).default.timelineData.forEach((object) => {
              this.apiResult.push({
                date: object.formattedTime,
                value: object.value,
              });
              this.chartData[object.formattedTime] = object.value[0];
            });
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>

<style></style>
