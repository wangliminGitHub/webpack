/*
 * @Author: your name
 * @Date: 2020-06-11 21:56:29
 * @LastEditTime: 2020-06-11 22:13:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myStudent/webpack-demo/webpack/src/components/index.js
 */
import { request } from '../api/index'
import { compons } from '../util'

export default () => {
	const screenFn = compons(request)
	screenFn()
}
