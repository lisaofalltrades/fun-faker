const houses = ['Hufflepuff', 'Ravenclaw', 'Gryffindor', 'Slytherin']

const characters = {
  'Harry Potter': {
    'House': 'Gryffindor',
    'DA': true
  }
}

function randomHouse() {
  return houses[Math.floor(Math.random() * houses.length)]
}

console.log(randomHouse())
