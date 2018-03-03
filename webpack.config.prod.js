const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
  app: path.join(process.cwd(), 'src/app.js') // Where webpack will be looking for entry app.js file
};

const output = {
  path: path.join(__dirname, 'dist'), // This is used to specify folder for producion bundle
  // publicPath: '/dist',
  filename: 'bundle.min.js' // Filename for production bundle
}

const plugins = [
	new webpack.NoEmitOnErrorsPlugin(), // Webpack will let you know if there are any errors

	// Declare global variables
	new webpack.ProvidePlugin({
		React: 'react',
		ReactDOM: 'react-dom',
		_: 'lodash'
	}),

  new ExtractTextPlugin('bundle.css'), // extract you css into seperate file files to serve your webpack bundles

  new HtmlWebpackPlugin({
    filename: 'index-template.html',
    template: './index-template.html',
    hash: false,
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    }
  }),

  new webpack.optimize.CommonsChunkPlugin({
		name: 'bundle',
		filename: 'bundle.common.js'
	})
]

const config = {
  context: path.join(__dirname, 'src'),
  entry: entry,
  devtool: 'source-map',
	devServer: {
		historyApiFallback: true, // This will make the server understand "/some-link" routs instead of "/#/some-link"
	},
  output: output,
  module: {
    rules: [
      {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: path.join(__dirname, 'src'),
				use: "babel-loader"
			},
      {
			  test: /\.(png|jpg|gif)$/,
			  use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]'
					}
				}]
			},
      {
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
			    fallback: 'style-loader',
			    use: [
			      'css-loader',
			      {
							loader: 'postcss-loader',
							options: {
								plugins: (loader) => [ require('autoprefixer')() ]
							}
						},
			      'sass-loader'
			    ]
			  })
			}
    ]
  },
  plugins: plugins
}

module.exports = config;
