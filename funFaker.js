const office = require('./office')
const hp = require('./hp')
const medical = require('./medical')

module.exports = {
  randomItem: (args) => {
    return args[Math.floor(Math.random() * args.length)]
  },
  office: office,
  hp: hp,
  medical: medical
}
