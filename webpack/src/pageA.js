/*
 * @Author: your name
 * @Date: 2020-06-11 22:29:25
 * @LastEditTime: 2020-06-11 22:32:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myStudent/webpack-demo/webpack/src/pageA.js
 */
import { request } from './api'
import deffaultFn from './components'

export default () => {
	request()
	deffaultFn()
}
