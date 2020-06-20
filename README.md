# fun-faker
make it fake but fun

## Examples

```javascript
// require the office files
const office = require('./office')

function randomCharacter (args) {
  const characters = args.characterList
  return characters[Math.floor(Math.random() * characters.length)]
}

function randomQuote (args) {
  const quotes = args.quotes
  return quotes[Math.floor(Math.random() * quotes.length)]
}
console.log(randomCharacter(office))
// returns a random character
console.log(randomQuote(office))
// returns a random quote
```
