/*
 * @Author: your name
 * @Date: 2020-06-06 22:38:49
 * @LastEditTime: 2020-06-08 23:07:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myStudent/webpack/config/index.js
 */
module.exports = {
	dev: {
		publicPath: '/',
		devtool: 'cheap-module-eval-source-map',
		host: 'localhost',
		port: 8080,
		assetsPublicPath: '/',
	},
	build: {
		publicPath: './',
		devtool: '#source-map',
	},
}
