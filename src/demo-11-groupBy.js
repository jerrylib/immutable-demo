/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之groupBy
 */
const { Map, List, fromJS } = require('immutable')

const list = List([Map({ name: 'Jack', age: 10 }), Map({ name: 'Rose', age: 10 }), Map({ name: 'Ben', age: 13 })])
const result = list.groupBy(val => {
  return `age=${val.get('age')}`
})
console.log('result=', JSON.stringify(result.toJS(), ' ', 2))