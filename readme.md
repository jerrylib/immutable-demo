# Immutable入门
## Immutable的简介
> <img src="./images/immutable.gif" />
Immutable data encourages pure functions (data-in, data-out) and lends itself to much simpler application development and enabling techniques from functional programming such as lazy evaluation.

> 

## Immutable的数据结构
### List
> Lists are ordered indexed dense collections, much like a JavaScript Array.
### Map
> Immutable Map is an unordered Collection.Keyed of (key, value) pairs with O(log32 N) gets and O(log32 N) persistent sets
### OrderMap
> A type of Map that has the additional guarantee that the iteration order of entries will be the order in which they were set().
### Set
> A Collection of unique values with O(log32 N) adds and has.
### OrderSet
> A type of Set that has the additional guarantee that the iteration order of values will be the order in which they were added
### Stack
> Stacks are indexed collections which support very efficient O(1) addition and removal from the front using unshift(v) and shift().
### Record
> A record is similar to a JS object, but enforces a specific set of allowed string keys, and has default values.
### Seq
> Seq describes a lazy operation, allowing them to efficiently chain use of all the higher-order collection methods (such as map and filter) by not creating intermediate collections.
### Collection
> The Collection is a set of (key, value) entries which can be iterated, and is the base class for all collections in immutable, allowing them to make use of all the Collection methods (such as map and filter).

## Immutable的Api介绍
### toJS()
```
const obj = Map({ name: 'Mike', age: 12 })
console.log(obj.toJS())
// {
//   "name": "Mike",
//   "age": 12
// }
```
### fromJs()
```
const obj = { name: 'Mike', age: 12 }
console.log(fromJS(obj))
// {
//   "name": "Mike",
//   "age": 12
// }
```
### get()/getIn()
```
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

console.log(obj.get(1).toJS())
// {
//   name: 'Tom',
//   age: 13,
//   address: [
//     {
//       name: 'green road 10',
//       other: 'else msg'
//     }
//   ]
// }

console.log(obj.getIn([1, 'address', 0, 'name']))
// green road 10
```
### has()/hasIn()/includes()
```
const { Map, List, fromJS } = require('immutable')
const array = List(['Tom', 'Jerry', 'Blue', { name: 'Jack' }])

console.log(array.has(0))
// true
console.log(array.has(4))
// false
console.log(array.hasIn([3, 'name']))
// true
console.log(array.includes('Blue'))
// true
```
### set()/setIn()
```
const { Map, List, fromJS } = require('immutable')

const obj = Map({
    name: 'Tom',
    age: 13,
    address: List([
      Map({
        name: 'green road 10',
        other: 'else msg'
      })])
  })

console.log(obj.set('address', List([
  Map({
    name: 'green road 9',
    other: ''
  })
])).toJS())
// {
//   "name": "Tom",
//   "age": 13,
//   "address": [
//     {
//       "name": "green road 9",
//       "other": ""
//     }
//   ]
// }

console.log(obj.setIn(['address', 0, 'other'], 'text'))
// {
//   "name": "Tom",
//   "age": 13,
//   "address": [
//     {
//       "name": "green road 10",
//       "other": "text"
//     }
//   ]
// }
```
### delete()
```
const { Map, List, fromJS } = require('immutable')

const array = List(['Tom', 'Jerry', 'Blue', { name: 'Jack' }])
console.log(array.delete(2).toJS())
// ['Tom', 'Jerry', { name: 'Jack' }]
```
### update()/updateIn()
```
const list = List(['a', 'b', 'c'])
const result = list.update(0, val => val.toUpperCase())

console.log(result.toJS())
// ['A', 'b', 'c']

const aMap = Map({ user: Map({ name: 'Jack', age: 10 }), id: '123' })
const bMap = aMap.update('id', value => value + value)
console.log(bMap.toJS())
// {
//   "user": {
//     "name": "Jack",
//     "age": 10
//   },
//   "id": "123123"
// }

const cMap = aMap.updateIn(['user'], item => item.set('name', 'Tom').set('age', 20))
console.log(cMap.toJS())
// {
//   "user": {
//     "name": "Tom",
//     "age": 20
//   },
//   "id": "123"
// }
```
### filter()
```
const list = List([Map({ name: 'Jack', age: 10 }), Map({ name: 'Rose', age: 11 }), Map({ name: 'Ben', age: 13 })])
const result = list.filter(val => {
  return val.get('age') > 11
})
console.log(result.toJS())
// [
//   {
//     "name": "Ben",
//     "age": 13
//   }
// ]
```
### groupBy()
```
const list = List([Map({ name: 'Jack', age: 10 }), Map({ name: 'Rose', age: 10 }), Map({ name: 'Ben', age: 13 })])
const result = list.groupBy(val => {
  return `age=${val.get('age')}`
})
console.log(result.toJS())
// {
//   "age=10": [
//     {
//       "name": "Jack",
//       "age": 10
//     },
//     {
//       "name": "Rose",
//       "age": 10
//     }
//   ],
//   "age=13": [
//     {
//       "name": "Ben",
//       "age": 13
//     }
//   ]
// }
```
### every()
```
const list = List([Map({ name: 'Jack', age: 11 }), Map({ name: 'Rose', age: 11 }), Map({ name: 'Ben', age: 13 })])
const result = list.every(val => val.get('age') > 10)
console.log(result)
// true
```
## Immutable的set/setIn实现
```
// step1
function setIn$1(keyPath, v) {
  return setIn(this, keyPath, v);
}
// step2
function setIn(collection, keyPath, value) {
  return updateIn(collection, keyPath, NOT_SET, function () { return value; });
}
// step3
function updateIn(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = undefined;
  }
  var updatedValue = updateInDeeply(
    isImmutable(collection),
    collection,
    coerceKeyPath(keyPath),
    0,
    notSetValue,
    updater
  );
  return updatedValue === NOT_SET ? notSetValue : updatedValue;
}
// step4
function updateInDeeply(
  inImmutable,
  existing,
  keyPath,
  i,
  notSetValue,
  updater
) {
  var wasNotSet = existing === NOT_SET;
  if (i === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }
  if (!wasNotSet && !isDataStructure(existing)) {
    throw new TypeError(
      'Cannot update within non-data-structure value in path [' +
        keyPath.slice(0, i).map(quoteString) +
        ']: ' +
        existing
    );
  }
  var key = keyPath[i];
  var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
  var nextUpdated = updateInDeeply(
    nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
    nextExisting,
    keyPath,
    i + 1,
    notSetValue,
    updater
  );
  return nextUpdated === nextExisting
    ? existing
    : nextUpdated === NOT_SET
      ? remove(existing, key)
      : set(
          wasNotSet ? (inImmutable ? emptyMap() : {}) : existing,
          key,
          nextUpdated
        );
}
```
## 小结
> qweqweqweqweqw
* 123
* 232ewqe
## 参考文档
* https://immutable-js.github.io/immutable-js/docs/#/
* https://juejin.im/post/5ac437436fb9a028c97a437c
* https://juejin.im/post/5b9b30a35188255c6418e67c
* https://juejin.im/post/5ba4a6b75188255ca1537b19