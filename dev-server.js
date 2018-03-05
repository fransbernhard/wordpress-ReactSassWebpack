const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const path = require('path');
const port = 8080;

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
});

server.listen(port, 'localhost', function(err) {
	if (err) {
    console.log(err);
    return;
  }
	console.log("Starting server on http://localhost:" + port);
});
