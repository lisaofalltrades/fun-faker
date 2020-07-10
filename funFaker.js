const office = require('./office')
const hp = require('./hp')
const medical = require('./medical')
const witcher = require('./witcher')
const states = require('./states')

const helpers = {
  fullName: (character) => {
    const firstName = character.split(' ')[0]
    let lastName = character.split(' ')[1]

    if (!character.split(' ')[1]) {
      lastName = 'Unknown'
    }

    return [firstName, lastName]
  },
  randomItem: (args) => {
    return args[Math.floor(Math.random() * args.length)]
  },
  userEmail: (character) => {
    const nameArr = character.split(' ')
    if (nameArr.length >= 2) {
      return (character[0] + nameArr.pop()).toLowerCase() + '@email.com'
    } else {
      return (character).toLowerCase() + '@email.com'
    }
  }

}
module.exports = {
  helpers: helpers,
  office: office,
  hp: hp,
  medical: medical,
  witcher: witcher,
  states: states
}
