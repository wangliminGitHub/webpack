/*
 * @Author: your name
 * @Date: 2020-06-11 22:29:39
 * @LastEditTime: 2020-06-11 22:29:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myStudent/webpack-demo/webpack/src/pageB.js
 */
import { request } from './api'
import deffaultFn from './components'

export default () => {
	request()
	deffaultFn()
}
