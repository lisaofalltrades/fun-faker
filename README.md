# fun-faker
make it fake but fun

## Examples

```javascript
// require fun-faker module
const funFaker = require('fun-faker')
// require the office
const office = funFaker.office

const characterList = office.characters
const quoteList = office.quotes

const randomCharacter = funFaker.randomItem(characterList)
const randomQuote = funFaker.randomItem(quoteList)

console.log(randomCharacter)
// returns a random character
console.log(randomQuote)
// returns a random quote
```
