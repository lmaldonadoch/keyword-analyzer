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
const googleTrends = require('google-trends-api');
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
      try {
        this.apiResult = await googleTrends.interestOverTime({
          keyword: this.keyword,
        });
        console.log(info);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
