export default (store) => ({
  path: 'login',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const LoginView = require('./components/LoginView').default
      cb(null, LoginView)
    }, 'counter')
  }
})
