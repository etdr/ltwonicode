
const Flip = require('./fx/flip')
const Creep = require('./fx/creep')

class LTwonicode {
  flip = new Flip()
  creep = new Creep()
}

module.exports = new LTwonicode()