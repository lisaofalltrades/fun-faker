# fun-faker
make it fake but fun

## Examples

```javascript
// require fun-faker module
const funFaker = require('fun-faker')

// require the themes
const office = funFaker.office
const medical = funFaker.medical

// randomly choose character, job, and quote
const randomCharacter = funFaker.randomItem(office.characters)
const job = funFaker.randomItem(medical.jobs)
const quote = funFaker.randomItem(office.quotes)

// create an email
const email = funFaker.userEmail(randomCharacter)

// result
console.log(`Name: ${randomCharacter}\nJob: ${job}\nEmail: ${email}\nMotto: ${quote}`)
```

## Themes

### Books
Harry Potter
  - characters
  - quotes
  - schools
  - Hogwards Houses
  - dwellings
  - locations
  - wand ceremony

### Shows
The Office
  - characters
  - quotes
  
### Games
The Witcher
  - characters
  - quotes

### Industries
Medical
  - conditions
  - jobs

### Standard stuff
  - Zip codes by State & county
    - Oregon