// Variables
const characters = [
  'Hannah Abbott', 'Ludo Bagman', 'Bathilda Bagshot', 'Katie Bell', 'Cuthbert Binns', 'Sirius Black', 'Walburga Black', 'Amelia Bones', 'Susan Bones', 'Terry Boot', 'Lavender Brown', 'Millicent Bulstrode', 'Charity Burbage', 'Frank Bryce', 'Alecto Carrow', 'Amycus Carrow', 'Reginald Cattermole', 'Mary Cattermole', 'Cho Chang', 'Penelope Clearwater', 'Mrs.Cole', 'Michael Corner', 'Vincent Crabbe', 'Colin Creevey', 'Dennis Creevey', 'Dirk Cresswell', 'Barty Crouch Sr', 'Barty Crouch Jr', 'Roger Davies', 'John Dawlish', 'Fleur Delacour', 'Gabrielle Delacour', 'Dedalus Diggle', 'Amos Diggory', 'Cedric Diggory', 'Elphias Doge', 'Antonin Dolohov', 'Aberforth Dumbledore', 'Albus Dumbledore', 'Ariana Dumbledore', 'Kendra Dumbledore', 'Percival Dumbledore', 'Dudley Dursley', 'Marge Dursley', 'Petunia Dursley', 'Vernon Dursley', 'Marietta Edgecombe', 'Arabella Figg', 'Argus Filch', 'Justin Finch-Fletchley', 'Seamus Finnigan', 'Marcus Flint', 'Mundungus Fletcher', 'Filius Flitwick', 'Florean Fortescue', 'Cornelius Fudge', 'Marvolo Gaunt', 'Merope Gaunt', 'Morfin Gaunt', 'Anthony Goldstein', 'Mr. Goyle', 'Mrs. Goyle', 'Gregory Goyle', 'Hermione Granger', 'Gregorovitch', 'Fenrir Greyback', 'Gellert Grindelwald', 'Wilhelmina Grubbly-Plank', 'Rubeus Hagrid', 'Rolanda Hooch', 'Mafalda Hopkirk', 'Angelina Johnson', 'Lee Jordan', 'Igor Karkaroff', 'Viktor Krum', 'Silvanus Kettleburn', 'Bellatrix Lestrange', 'Rabastan Lestrange', 'Rodolphus Lestrange', 'Gilderoy Lockhart', 'Alice and Frank Longbottom', 'Augusta Longbottom', 'Neville Longbottom', 'Luna Lovegood', 'Xenophilius Lovegood', 'Remus Lupin', 'Teddy Lupin', 'Walden Macnair', 'Draco Malfoy', 'Lucius Malfoy', 'Narcissa Malfoy', 'Scorpius Malfoy', 'Madam Malkin', 'Griselda Marchbanks', 'Olympe Maxime', 'Ernie Macmillan', 'Minerva McGonagall', 'Cormac McLaggen', 'Graham Montague', 'Alastor (Mad - Eye) Moody', 'Theodore Nott', 'Bob Ogden', 'Garrick Ollivander', 'Pansy Parkinson', 'Padma Patil', 'Parvati Patil', 'Peter Pettigrew', 'Antioch Peverell', 'Cadmus Peverell', 'Ignotus Peverell', 'Irma Pince', 'Sturgis Podmore', 'Poppy Pomfrey', 'Harry Potter', 'James Potter', 'Lily Potter', 'Albus Severus Potter', 'James Sirius Potter', 'Lily Luna Potter', 'Quirinus Quirrell', 'Helena Ravenclaw', 'Mary Riddle', 'Thomas Riddle Sr. ', 'Thomas Riddle Jr. ', 'Thomas Marvolo Riddle', 'Demelza Robins', 'Augustus Rookwood', 'Thorfinn Rowle', 'Albert Runcorn', 'Newt Scamander', 'Rufus Scrimgeour', 'Kingsley Shacklebolt', 'Stan Shunpike', 'Aurora Sinistra', 'Rita Skeeter', 'Horace Slughorn', 'Salazar Slytherin', 'Zacharias Smith', 'Severus Snape', 'Alicia Spinnet', 'Pomona Sprout', 'Pius Thicknesse', 'Dean Thomas', 'Andromeda Tonks', 'Nymphadora Tonks', 'Ted Tonks', 'Sybill Trelawney', 'Wilkie Twycross', 'Dolores Umbridge', 'Emmeline Vance', 'Romilda Vane', 'Septima Vector', 'Lord Voldemort', 'Moaning Myrtle', 'Arthur Weasley', 'Bill Weasley', 'Charlie Weasley', 'Fred Weasley', 'George Weasley', 'Ginny Weasley', 'Hugo Weasley', 'Molly Weasley', 'Percy Weasley', 'Ron Weasley', 'Oliver Wood', 'Rose Weasley', 'Corban Yaxley', 'Blaise Zabini'
]

const quotes = [
  'I hope you\'re pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don\'t mind, I\'m going to bed.',
  'It does not do well to dwell on dreams and forget to live.',
  'To the well-organized mind, death is but the next great adventure.',
  'You\'re a little scary sometimes, you know that? Brilliant...but scary.',
  'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
  'Yer a wizard Harry.',
  'There are some things you can’t share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.',
  'Dobby is free.',
  'I’ll be in my bedroom, making no noise and pretending I’m not there.',
  'When in doubt, go to the library.',
  'Honestly, if you were any slower, you’d be going backward.',
  'I solemnly swear I am up to no good.',
  'Honestly, am I the only person who\'s ever bothered to read \'Hogwarts: A History?\'',
  'Happiness can be found even in the darkest of times, if one only remembers to turn on the light.',
  'Don’t let the muggles get you down.',
  'I want to commit the murder I was imprisoned for.',
  'Why, dear boy, we don’t send wizards to Azkaban just for blowing up their aunts.',
  'Mischief Managed!',
  'Anyone can speak Troll. All you have to do is point and grunt.',
  'Just because it’s taken you three years to notice, Ron, doesn’t mean no one else has spotted I’m a girl!',
  'Twitchy little ferret, aren’t you, Malfoy?'
]
function randomCharacter () {
  return characters[Math.floor(Math.random() * characters.length)]
}

function randomQuote () {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
