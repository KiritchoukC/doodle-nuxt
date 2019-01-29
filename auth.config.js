module.exports = {
  redirect: {
    login: '/',
    logout: '/',
    callback: '/',
    home: '/groups/list'
  },
  strategies: {
    local: {
      endpoints: {
        login: {
          url: '/users/login',
          method: 'post',
          propertyName: 'user.token'
        },
        logout: false,
        user: {
          url: '/users/current',
          method: 'get',
          propertyName: 'user'
        }
      },
      tokenRequired: true
    }
  }
}
