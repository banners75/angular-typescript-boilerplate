var gulp = require("gulp");
var Server = require("karma").Server;
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");
var gutil = require('gulp-util');

gulp.task("test", function (done) {
    new Server({
        configFile: __dirname + "/karma.conf.js"
    }, done).start();
});


gulp.task("build", function (done) {
    webpack(webpackConfig).run(onBuild(done));
});

function onBuild(done) {
    return function(err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function(key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });
            gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
            if (done) {
                done();
            }
        }
    }
}


gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: myConfig.path,
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});