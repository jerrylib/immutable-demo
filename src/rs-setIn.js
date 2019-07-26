const { Map } = require('immutable')

var before = Map({ name: 'mike'})
before.set('name', {})
before.setIn(['name'], {})