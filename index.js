const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { typeDefs } = require('./schema');
const db = require('./_db');

const resolvers = {
  Query: {
    reviews: () => db.reviews,
    review: (_, args) => {
      return db.reviews.find((review) => review.id == args.id);
    },
    games: () => db.games,
    game: (_, args) => db.games.find((game) => game.id == args.id),
    authors: () => db.authours,
    author: (_, args) => db.authours.find((author) => author.id == args.id),
  },
  Game: {
    reviews: (parent) => {
      return db.reviews.filter((review) => review.game_id == parent.id);
    },
  },
  Author: {
    reviews: (parent) => {
      return db.reviews.filter((review) => review.authour_id == parent.id);
    },
  },
  Review: {
    author: (parent) => {
      return db.authours.find((author) => author.id == parent.authour_id);
    },
    game: (parent) => {
      return db.games.find((game) => game.id == parent.game_id);
    },
  },
  Mutation: {
    addGame: (_, args) => {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.games.push(game);
      return game;
    },
    deleteGame: (_, args) => {
      return db.games.filter((game) => game.id != args.id);
    },
  },
};

//server setup
const server = new ApolloServer({
  // typeDefs -- definition of type of data;
  typeDefs,
  // Resolvers
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
