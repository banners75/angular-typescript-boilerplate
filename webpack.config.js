"use strict";

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
    devtool: "source-map"
};
