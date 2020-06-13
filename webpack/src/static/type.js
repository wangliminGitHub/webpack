/*
 * @Author: your name
 * @Date: 2020-06-09 21:05:34
 * @LastEditTime: 2020-06-11 22:15:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myStudent/webpack/src/static/type.js
 */
import { compons } from '../util'

const add = (a, b) => a + b

const fns = compons(add)
export default () => {
	fns(1, 2)
}
