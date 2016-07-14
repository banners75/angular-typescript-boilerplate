var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
    config.set({
        browsers: ["Chrome"],
        frameworks: ["jasmine"],
        files: [
            "tests/test.app.ts",
            "tests/**/*.spec.ts"
        ],
        preprocessors: {
            "tests/test.app.ts": ["webpack"],
            "tests/**/*.spec.ts": ["webpack"]
        },

        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve,
            plugins: [
              new webpack.SourceMapDevToolPlugin({
                  filename: null, // if no value is provided the sourcemap is inlined
                  test: /\.(ts|js)($|\?)/i // process .js and .ts files only
              })
            ],
            devtool: "inline-source-map"
        },
        singleRun: false,
        reporters: ["spec"]

    });
};
