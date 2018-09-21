const withImages = require('next-images');

module.exports = withImages({
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "react-svg-loader",
          options: {
            jsx: true
          }
        }
      ]
    });

    return config;
  }
});
