/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之get/getIn
 */
const { Map, List, fromJS } = require('immutable')

const obj = List([
  Map({
    name: 'Mike',
    age: 12,
    address: []
  }),
  Map({
    name: 'Tom',
    age: 13,
    address: List([
      Map({
        name: 'green road 10',
        other: 'else msg'
      })])
  })
])
console.log('obj.get(1).toJS()=', obj.get(1).toJS())
console.log(obj.getIn([1, 'address', 0, 'name']))