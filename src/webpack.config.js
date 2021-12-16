const path = require('path');

module.exports={
  entry: path.join(__dirname, "src", "index.js",

  ouput: {
    path: path.resolve(__dirname, "dist"),
  },
  const path = require('path');​
  const HtmlWebpackPlugin = require('html-webpack-plugin');​
​
    module.exports = {​
      entry: path.join(__dirname, "src", "index.js"),​
    output: {​
      path:path.resolve(__dirname, "dist"),​
    },​
    plugins: [​
      new HtmlWebpackPlugin({​
        template: path.join(__dirname, "src", "index.html"),​
      }),​
    ],​
  }​
}