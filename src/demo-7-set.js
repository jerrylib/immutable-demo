/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之set/setIn
 */
const { Map, List, fromJS } = require('immutable')

const obj =
  Map({
    name: 'Tom',
    age: 13,
    address: List([
      Map({
        name: 'green road 10',
        other: 'else msg'
      })])
  })
console.log('obj.set=', JSON.stringify(obj.set('address', List([
  Map({
    name: 'green road 9',
    other: ''
  })])).toJS(), ' ', 2))
console.log('obj.setIn=', JSON.stringify(obj.setIn(['address', 0, 'other'], 'text'), '', 2))