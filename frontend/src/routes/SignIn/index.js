export default (store) => ({
  path: 'sign_in',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const SignInView = require('./components/SignInView').default
      cb(null, SignInView)
    }, 'sign_in')
  }
})
