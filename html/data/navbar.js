const countrycodes = require('./countrycodes')

module.exports = [
  {
    id: 'navbar',
    base: 'no-shadow',
    menu: 'is-static',
    countrycodes
  },
  {
    id: 'navbar-clone',
    base: '',
    menu: 'is-fixed',
    countrycodes
  }
]