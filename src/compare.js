const { setIn } = require('@gem-mine/immutable')
const { Map } = require('immutable')

let obj = { room: [{ user: { name: 'Jack', age: 0 } }, { user: { name: 'Rose', age: 0 } }] }
let mapObj = Map(obj)

console.time('gem-mine/immutable')
for (let index = 0; index < 500; index++) {
  obj = setIn(obj, { 'room.1.user.age': index, 'room.0.user.age': index + 1 })
}
console.timeEnd('gem-mine/immutable')

console.time('immutable')
for (let index = 0; index < 500; index++) {
  mapObj = mapObj.setIn(['room', 1, 'user', 'age'], index).setIn(['room', 0, 'user', 'age'], index + 1)
}
console.timeEnd('immutable')

console.log('obj=', JSON.stringify(obj, ' ', 2), 'mapObj=', JSON.stringify(mapObj.toJS(), ' ', 2))