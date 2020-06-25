const office = require('./office')
const hp = require('./hp')
const medical = require('./medical')

module.exports = {
  randomItem: (args) => {
    return args[Math.floor(Math.random() * args.length)]
  },
  userEmail: (character) => {
    return (character[0] + character.split(' ').pop()).toLowerCase() + '@email.com'
  },
  office: office,
  hp: hp,
  medical: medical
}
