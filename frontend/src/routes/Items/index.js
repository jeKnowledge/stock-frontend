export default (store) => ({
  path: 'items',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ItemsView = require('./components/ItemsView').default
      cb(null, ItemsView)
    }, 'items')
  }
})
