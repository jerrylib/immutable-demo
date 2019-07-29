/*
 * @Author: libin 
 * @Date: 2019-07-23 14:52:19 
 * 状态共享的产生
 */
const { Set } = require('immutable')

var set = Set(['a', 'b', 'c'])

var nextSet = set.add('d')
console.log(set.toJS(), nextSet.toJS())
