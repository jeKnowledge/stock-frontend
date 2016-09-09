export default (store) => ({
  path: 'sign_up',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const SignUpView = require('./SignUpView').default
      cb(null, SignUpView)
    }, 'sign_up')
  }
})
