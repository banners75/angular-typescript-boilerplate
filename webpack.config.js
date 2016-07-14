"use strict";
var webpack = require("webpack");

module.exports = {
    entry: "./app/app.ts",
    output: {
        path: __dirname + "/dist/",
        filename: "[name].js",
        sourceMapFileName: "[file].map"
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader?sourceMap"
        }, {
            test: /\.ts$/,
            exclude: /(node_modules)/,
            loader: "ts-loader"
        }]
    },
    resolve: {
        extensions: ["",".ts",".js",".es6"]
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin({
          filename: null, // if no value is provided the sourcemap is inlined
          test: /\.(ts|js)($|\?)/i // process .js and .ts files only
      })
    ],
    devtool: "source-map"
};
