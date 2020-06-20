const hp = require('./hp')
const office = require('./office')

function randomCharacter (args) {
  const characters = args.characters
  return characters[Math.floor(Math.random() * characters.length)]
}

function randomQuote (args) {
  const quotes = args.quotes
  return quotes[Math.floor(Math.random() * quotes.length)]
}

// console.log(randomCharacter(hp))
// console.log(randomQuote(hp))

// console.log(randomCharacter(office))
// console.log(randomQuote(office))
