/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之groupBy
 */
const { Map, List, fromJS } = require('immutable')

const list = List([Map({ name: 'Jack', age: 11 }), Map({ name: 'Rose', age: 11 }), Map({ name: 'Ben', age: 13 })])
const result = list.every(val => val.get('age') > 10)
console.log('result=', result)