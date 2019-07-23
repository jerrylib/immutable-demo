/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之fromJS
 */
const { Map, fromJS } = require('immutable')

const obj = { name: 'Mike', age: 12 }
console.log(fromJS(obj))