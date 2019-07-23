/*
 * @Author: libin 
 * @Date: 2019-07-23 14:52:19 
 * 状态共享的产生
 */
const { Map } = require('immutable')

var obj = { a: 1 }
var copyObj = obj
copyObj.a = 2
console.log('obj=', obj)
console.log('copyObj=', copyObj)

console.log(Map({ a: 1 }), Map({ a: 1, b: 3 }).toJS())
