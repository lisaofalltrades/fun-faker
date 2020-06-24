const office = require('./office')
const hp = require('./hp')

module.exports = {
  randomCharacter: (args) => {
    const characters = args.characters
    return characters[Math.floor(Math.random() * characters.length)]
  },
  randomQuote: (args) => {
    const quotes = args.quotes
    return quotes[Math.floor(Math.random() * quotes.length)]
  },
  office: office,
  hp: hp
}
