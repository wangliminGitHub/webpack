/*
 * @Author: your name
 * @Date: 2020-03-10 20:26:11
 * @LastEditTime: 2020-06-08 23:08:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myStudent/webpack/build/webpack.config.js
 */
const path = require('path')
const config = require('../config')

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		app: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		publicPath:
			process.env.NODE_ENV === 'production' ? config.build.publicPath : config.dev.publicPath,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				exclude: /node_modules/,
				options: {
					// eslint-disable-next-line global-require
					formatter: require('eslint-friendly-formatter'),
				},
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': path.join(__dirname, '..', 'src'),
		},
	},
}
