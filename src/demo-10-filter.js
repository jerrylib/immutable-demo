/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之filter 
 */
const { Map, List, fromJS } = require('immutable')

const list = List([Map({ name: 'Jack', age: 10 }), Map({ name: 'Rose', age: 11 }), Map({ name: 'Ben', age: 13 })])
const result = list.filter(val => {
  return val.get('age') > 11
})
console.log('result=', JSON.stringify(result.toJS(), ' ', 2))