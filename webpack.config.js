const path = require('path');

module.exports = {
  // Other webpack configuration options...

  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser")
    }
  }
};
