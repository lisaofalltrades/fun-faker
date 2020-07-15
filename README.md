# fun-faker
make it fake but fun

## Helpers

First & Last Name

```javascript
// require module
const funFaker = require('./funFaker')
// helpers
const helpers = funFaker.helpers
// themes
const hp = funFaker.hp

// ramdom character
const randomCharacter = helpers.randomItem(hp.characters)
// first & last name
const firstName = helpers.fullName(randomCharacter)[0]
const lastName = helpers.fullName(randomCharacter)[1]

console.log(`First Name: ${firstName}`)
console.log(`Last Name: ${lastName}`)
/*
Result:
First Name: Vernon
Last Name: Dursley
*/
```

Job & Email

```javascript
// require module
const funFaker = require('./funFaker')
// helpers
const helpers = funFaker.helpers
// themes
const hp = funFaker.hp
const medical = funFaker.medical

// ramdom character
const randomCharacter = helpers.randomItem(hp.characters)
// First Name: Vernon
// Last Name: Dursley

// asign job
const job = helpers.randomItem(medical.jobs)
// Job: Massage Therapist

// assign email
const email = helpers.userEmail(randomCharacter)
// Email: vdursley@email.com
```

Random address

```javascript
// require module
const funFaker = require('./funFaker')
// require themes
const states = funFaker.states

const address = states.helpers.randomAddress()
console.log(address)
/* returns an addres object
{
  address1: '1915 Southeast 29th Street',
  address2: '',
  city: 'Oklahoma City',
  state: 'OK',
  postalCode: '73129',
  coordinates: { lat: 35.4360844, lng: -97.4787061 }
}
*/
```

## Themes

### Books
Harry Potter
  - characters
  - quotes
  - schools
  - Hogwarts Houses
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
Tech
  - jobs
  - FAAANG companies

### Standard stuff
Addresses
  - Zip codes by State
    - Oregon
  - 500 US valid addresses with coordinates (sourced from [RRAD](https://github.com/EthanRBrown/rrad))