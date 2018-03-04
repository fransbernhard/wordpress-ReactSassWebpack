const webpack = require('webpack');
const path = require('path');

const entry = [
  'webpack-dev-server/client?http://127.0.0.1:8080', // Specify the local server port
  'webpack/hot/only-dev-server', // Enable hot reloading
  './app.js' // Where webpack will be looking for entry index.js file
];

const output = {
  path: path.join(__dirname, 'dist'), // Specify folder for producion bundle
  publicPath: '/dist',
  filename: 'bundle.min.js'
}

const plugins = [
  new webpack.HotModuleReplacementPlugin(), // Hot reloading
	new webpack.NoEmitOnErrorsPlugin(), // Webpack will let you know if there are any errors
	new webpack.ProvidePlugin({ // Declare global variables
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
		historyApiFallback: true, // Make server understand "/some-link" routs instead of "/#/some-link"
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
