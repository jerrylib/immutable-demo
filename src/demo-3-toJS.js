/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之toJS
 */
const { Map } = require('immutable')

const obj = Map({ name: 'Mike', age: 12 })
console.log(obj)
console.log(obj.toJS())