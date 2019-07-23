/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之has/hasIn/includes
 */
const { Map, List, fromJS } = require('immutable')

const array = List(['Tom', 'Jerry', 'Blue', { name: 'Jack' }])
console.log('array.has(0)=', array.has(0))
console.log('array.has(3)=', array.has(4))
console.log("array.hasIn([3, 'name'])=", array.hasIn([3, 'name']))
console.log("array.includes('Blue')=", array.includes('Blue'))