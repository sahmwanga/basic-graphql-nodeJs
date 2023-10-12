module.exports.games = [
  // create games with id, title and platform
  {
    id: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    platform: ['Nintendo Switch'],
  },
  {
    id: 2,
    title: '2. The Legend of Zelda: Breath of the Wild',
    platform: ['Nintendo Switch'],
  },
  {
    id: 3,
    title: '3. The Legend of Zelda: Breath of the Wild',
    platform: ['Nintendo Switch'],
  },
  {
    id: 4,
    title: '4. The Legend of Zelda: Breath of the Wild',
    platform: ['Nintendo Switch'],
  },
  {
    id: 5,
    title: '5. The Legend of Zelda: Breath of the Wild',
    platform: ['Nintendo Switch'],
  },
];

module.exports.authours = [
  // creat author with id, name and verified
  {
    id: 1,
    name: 'Author 1',
    verified: true,
  },
  {
    id: 2,
    name: 'Author 2',
    verified: true,
  },
  {
    id: 3,
    name: 'Author 3',
    verified: false,
  },
  {
    id: 4,
    name: 'Author 4',
    verified: false,
  },
  {
    id: 5,
    name: 'Author 5',
    verified: true,
  },
];

module.exports.reviews = [
  // create reviews with id, rating, content, authour_id, game_id
  {
    id: 1,
    rating: 5,
    content: 'Awesome game review 1',
    authour_id: 1,
    game_id: 1,
  },
  {
    id: 2,
    rating: 4,
    content: 'Awesome game review 2',
    authour_id: 1,
    game_id: 2,
  },
  {
    id: 3,
    rating: 3,
    content: 'Awesome game review 3',
    authour_id: 3,
    game_id: 3,
  },
  {
    id: 4,
    rating: 2,
    content: 'Awesome game review 4',
    authour_id: 4,
    game_id: 4,
  },
  {
    id: 5,
    rating: 2,
    content: 'Awesome game review 5',
    authour_id: 2,
    game_id: 4,
  },
];
