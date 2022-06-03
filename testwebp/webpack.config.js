const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
let _dirname = './';

module.exports={
    entry:{
        main:path.resolve(_dirname,'./src/index.js')
    },
    output:{
        filename:'main.js',
        path:path.resolve(_dirname,'dist')
   },
   module:{
    rules:[
     {
        test:/\.html$/i,
        loader:'html-loader',
     },

     {
      test:/\.(sa|sc|c)ss$/,
       use:[
        MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
         "sass-loader",
       ],
     },
     {
     test:/\.(png|jpe?g|gif)$/i,
     use:[
      {
         loader:'file-loader',
      },
     ],

     },

   ],
  },

  plugins:[new HtmlWebpackPlugin(
     {
      filename:'index.html',
      template:'./src/index.html'
     }),

  new  MiniCssExtractPlugin({filename:'style.css'})


],


}