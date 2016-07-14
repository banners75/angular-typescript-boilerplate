var webpackConfig = require("./webpack.config.js");
webpackConfig.entry = {};
webpackConfig.devtool = "inline-source-map";

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

        webpack: webpackConfig,
        singleRun: false,
        reporters: ["spec"]

});
};
