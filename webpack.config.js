const webpack = require('webpack');
const path = require('path');

const entry = [
  // 'babel-polyfill',
  'webpack-dev-server/client?http://127.0.0.1:5000', // Specify the local server port
  'webpack/hot/only-dev-server', // Enable hot reloading
  './app.js' // Where webpack will be looking for entry index.js file
];

const output = {
  path: path.join(__dirname, 'dist'), // This is used to specify folder for producion bundle
  publicPath: '/dist',
  filename: 'bundle.min.js'
}

const plugins = [
  new webpack.HotModuleReplacementPlugin(), // Hot reloading
	new webpack.NoEmitOnErrorsPlugin(), // Webpack will let you know if there are any errors

	// Declare global variables
	new webpack.ProvidePlugin({
		React: 'react',
		ReactDOM: 'react-dom',
		_: 'lodash'
	})
]

const config = {
  context: path.join(__dirname, 'src'),
  entry: entry,
  output: output,
  devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true, // This will make the server understand "/some-link" routs instead of "/#/some-link"
	},
  module: {
    rules: [
      {
				test: /\.(js|jsx)$/,
        exclude: /node_modules/,
				include: path.join(__dirname, 'src'),
        use: {
					loader: "babel-loader"
				}
			},
      {
			  test: /\.(png|jpg|gif)$/,
			  use: [{
			    loader: 'url-loader',
          options: { limit: 10000, name: './src/img/[name].[ext]' }
			  }]
			},
      {
				test: /\.(sass|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
    ]
  },
  plugins: plugins
}

module.exports = config;
