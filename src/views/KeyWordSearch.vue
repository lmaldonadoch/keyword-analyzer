<template>
  <div>
    <h2>Enter a keyword and find out how it is currently trending!</h2>
    <div class="keyword">
      <input type="text" v-model="keyword" placeholder="keyword to look for" />
    </div>

    <button @click="interestTrend">Interest Trend</button>

    <div class="row container-fluid">
      <div class="col-12 chart" v-if="apiResult.length > 0">
        <line-chart :data="chartData"></line-chart>
      </div>

      <div class="container col-8">
        <b-table striped hover :items="apiResult"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Chart from 'vue-chartjs';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
  name: 'keywordsearch',
  data() {
    return {
      apiResult: [],
      keyword: '',
      chartData: {},
    };
  },
  methods: {
    async interestTrend() {
      (this.apiResult = []),
        axios
          .post('https://vue-node-server.herokuapp.com/new', {
            keyword: this.keyword,
          })
          .then((response) => {
            JSON.parse(response.data).default.timelineData.forEach((object) => {
              this.apiResult.push({
                date: object.formattedTime,
                value: object.value[0],
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

<style>
h2 {
  padding-top: 30px;
}

input {
  width: 400px;
  padding: 30px;
  margin: 20px !important;
  font-size: 21px;
  height: 30px;
}

button {
  background-color: #7480ff;
  margin: 20px 0 40px !important;
  padding: 15px 30px;
  border: none;
  color: #fff;
  width: 400px;
}

.chart {
  margin-bottom: 40px;
}
</style>
