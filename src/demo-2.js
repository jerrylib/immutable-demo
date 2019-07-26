/*
 * @Author: libin 
 * @Date: 2019-07-23 14:52:00 
 * 节点数据共享
 */
const { Map } = require('immutable')

var before = Map({ name: { a: 1, b: 2 }, age: 12 })
var after = before.set('age', 21)
console.log('before=', before.toJS())
console.log('after=', after.toJS())
console.log("before.get('name') === after.get('name')", before.get('name') === after.get('name'))