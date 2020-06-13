/*
 * @Author: your name
 * @Date: 2020-03-10 20:26:11
 * @LastEditTime: 2020-06-11 22:28:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myStudent/webpack/build/webpack.config.js
 */
const path = require('path')
const config = require('../config')

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		pageA: './src/pageA.js',
		pageB: './src/pageB.js',
		pageC: './src/pageC.js',
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
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 30000,
			maxSize: 0,
			minChunks: 2,
			maxAsyncRequests: 6,
			maxInitialRequests: 4,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': path.join(__dirname, '..', 'src'),
		},
	},
}
