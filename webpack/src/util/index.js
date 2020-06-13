/*
 * @Author: your name
 * @Date: 2020-06-11 21:53:50
 * @LastEditTime: 2020-06-11 22:11:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myStudent/webpack-demo/webpack/src/util/index.js
 */
export const compons = (...fns) => fns.reduce((acc, cur) => (...args) => acc(cur(...args)))

export const formatData = (a, b) => a + b
