/*
 * @Author: libin 
 * @Date: 2019-07-23 14:55:42 
 * immutable方法简介之withMutations
 */
const { List } = require('immutable')

const list1 = List([ 1, 2, 3 ]);
const list2 = list1.withMutations(function (list) {
  list.push(4).push(5).push(6);
});
console.log(list2.toJS())