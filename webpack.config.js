const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlughin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	use: ['css-loader', 'style-loader']
});

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'app.bundle.js',
		path: path.join(__dirname, './dist')
	},

	module: {
		rules: [
			{
				test: /\.sass$/,
				use: cssConfig
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlughin({
			title: 'Recipe Box',
			template: './src/index.html'
		}),
		new ExtractTextPlugin({
			filename: 'css/style.css',
			disable: !isProd,
			allChunks: true
		})
	]
}

