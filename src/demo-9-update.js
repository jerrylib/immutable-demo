/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之update
 */
const { Map, List, fromJS } = require('immutable')

const list = List(['a', 'b', 'c'])
const result = list.update(0, val => val.toUpperCase())
console.log(result.toJS())
///Map
const aMap = Map({ key: 'value' })
const newMap = aMap.update('key', value => value + value)
console.log(newMap.toJS())
console.log(aMap.keySeq())