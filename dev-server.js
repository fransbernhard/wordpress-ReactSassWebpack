var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
// requiring my webpack configuration
var config = require('./webpack.config.js');
var path = require('path');

var compiler = webpack(config);
// then spinning up a new dev server with some settings
var server = new WebpackDevServer(compiler, {
	hot: true,
	filename: config.output.filename,
	publicPath: config.output.publicPath,
	proxy: {},
	stats: {
		colors: true
	},
	historyApiFallback: {
	  disableDotRule: true
	}
	// host: '0.0.0.0'
});

// its gonna listen to port 8080
server.listen(5000, 'localhost', function(err) {
	if (err) {
    console.log(err);
    return;
  }
	console.log("Starting server on http://localhost:5000");
});
