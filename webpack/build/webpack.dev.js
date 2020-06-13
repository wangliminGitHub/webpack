/* eslint-disable no-console */
/*
 * @Author: your name
 * @Date: 2020-03-10 20:26:38
 * @LastEditTime: 2020-06-11 22:17:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myStudent/webpack/build/webpack.dev.js
 */
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const PortFinder = require('portfinder')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const notifier = require('node-notifier')
const baseWebpackConfig = require('./webpack.config')
const config = require('../config')
const packageConfig = require('../package.json')
const dev = require('../config/dev.env')

// eslint-disable-next-line arrow-body-style
const createNotifierCallback = () => {
	return (severity, errors) => {
		if (severity !== 'error') return

		const error = errors[0]
		const filename = error.file && error.file.split('!').pop()

		notifier.notify({
			title: packageConfig.name,
			message: `${severity}: ${error.name}`,
			subtitle: filename || '',
			icon: path.join(__dirname, 'logo.png'),
		})
	}
}

const mergeWebpackConfig = webpackMerge(baseWebpackConfig, {
	plugins: [
		new webpack.DefinePlugin({
			'process.env': dev,
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'public/index.html',
			inject: true,
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../static'),
				to: 'static',
				ignore: ['.*'],
			},
		]),
	],
	devtool: config.dev.devtool,
	devServer: {
		clientLogLevel: 'warning',
		compress: true,
		hot: true,
		contentBase: false,
		port: config.dev.port,
		host: config.dev.host,
		open: true,
		overlay: {
			warnings: true,
			errors: true,
		},
		publicPath: config.dev.assetsPublicPath,
		// quiet: true,
		watchOptions: {
			poll: true,
		},
	},
})
module.exports = new Promise((resolve, reject) => {
	PortFinder.basePort = config.dev.port
	PortFinder.getPortPromise()
		.then(port => {
			mergeWebpackConfig.devServer.port = port
			mergeWebpackConfig.plugins.push(
				new FriendlyErrorsPlugin({
					compilationSuccessInfo: {
						messages: [
							`Your application is running here: http://${mergeWebpackConfig.devServer.host}:${port}`,
						],
					},
					onErrors: createNotifierCallback(),
				})
			)
			resolve(mergeWebpackConfig)
		})
		.catch(err => {
			console.log(err, '====')
			reject(err)
		})
})
