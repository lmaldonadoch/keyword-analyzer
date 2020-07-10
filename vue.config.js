module.exports = {
  devServer: {
    proxy: {
      '/keywordsearch': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
