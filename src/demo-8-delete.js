/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之delete
 */
const { Map, List, fromJS } = require('immutable')

const array = List(['Tom', 'Jerry', 'Blue', { name: 'Jack' }])
console.log('array.delete(2)', array.delete(2).toJS())