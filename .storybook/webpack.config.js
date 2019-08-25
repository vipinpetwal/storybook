const path=require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
         loaders: ["to-string-loader", "css-loader"],
        include:[
            path.resolve(__dirname,'../src'),
            path.resolve(__dirname,'./')
        ]
      },
    ],
  },
};