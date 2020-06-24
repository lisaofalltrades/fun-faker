function randomCharacter (args) {
  const characters = args.characters
  return characters[Math.floor(Math.random() * characters.length)]
}

function randomQuote (args) {
  const quotes = args.quotes
  return quotes[Math.floor(Math.random() * quotes.length)]
}

module.exports = {
  randomCharacter: randomCharacter,
  randomQuote: randomQuote
}
