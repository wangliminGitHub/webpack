/*
 * @Author: your name
 * @Date: 2020-06-11 22:29:49
 * @LastEditTime: 2020-06-11 22:33:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myStudent/webpack-demo/webpack/src/pageC.js
 */
import { request } from './api'
import deffaultFn from './components'

export default () => {
	request()
	deffaultFn()
}
