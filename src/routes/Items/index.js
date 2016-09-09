export default (store) => ({
  path: 'items',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ItemsView = require('./ItemsView').default
      cb(null, ItemsView)
    }, 'items')
  }
})
