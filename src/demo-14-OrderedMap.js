/*
 * @Author: libin 
 * @Date: 2019-07-23 14:52:19 
 * 状态共享的产生
 */
const { OrderedMap } = require('immutable')

var orderedMap = OrderedMap({ b: 'b1', 'a': 'a1', })

var nextOrderMap = orderedMap.set('c', 'c').set('a', 'a').set('b', 'b')
console.log(nextOrderMap.toJS())
