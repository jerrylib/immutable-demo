/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之update/updateIn
 */
const { Map, List, fromJS } = require('immutable')

const list = List(['a', 'b', 'c'])
const result = list.update(0, val => val.toUpperCase())
console.log(result.toJS())
///Map
const aMap = Map({ user: Map({ name: 'Jack', age: 10 }), id: '123' })
const bMap = aMap.update('id', value => value + value)
const cMap = aMap.updateIn(['user'], item => item.set('name', 'Tom').set('age', 20))
console.log(JSON.stringify(bMap.toJS(), ' ', 2))
console.log(JSON.stringify(cMap.toJS(), ' ', 2))