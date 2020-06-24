# fun-faker
make it fake but fun

## Examples

```javascript
// require the office files
const funFaker = require('fun-faker')
const office = require('./node_modules/fun-faker/office')


const randomCharacter = funFaker.randomCharacter(office)
const randomQuote = funFaker.randomQuote(office)

console.log(randomCharacter(randomCharacter))
// returns a random character
console.log(randomQuote(randomQuote))
// returns a random quote
```
