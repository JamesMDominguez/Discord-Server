const {gql} = require('apollo-server');

const typeDefs = gql`
  type Group {
    id: ID!
    userID: String!
    roomID: String!
    deleted: Boolean!
    user: [User!]!
  }

  type User {
    id: ID!
    name: String!
  }

  type Message {
    id: ID!
    message: String!
    userID: String!
    roomID: String!
    deleted: Boolean!
  }

  type Room {
    id: ID!
    name: String!
    deleted: Boolean!
    group: Group!
    message: [Message]
  }


  type Query {
    getMessages(roomID: String!): [Message],
    getUser(id: ID!): User,
    getGroup(id: ID!): [Group],
    getRooms(id: ID!): [Room],
    getRoom(id: ID!): Room
  }

  type Mutation {
    createMessage(message: String!, userID: String!, roomID: String!, deleted: Boolean!): Message!
    editMessage(id: ID!, message: String!, userID: String!, roomID: String!, deleted: Boolean!): Message!
    deleteMessage(id: ID!): Message!

    createRoom(name: String!, deleted: Boolean!): Room!
    editRoom(id: ID!, name: String!, deleted: Boolean!): Room!
    deleteRoom(id: ID!): Room!

    createUser(name: String!, deleted: Boolean!): User!
    editUser(id: ID!,name: String!): User!
    deleteUser(id: ID!): User!
    
    createGroup(userID: String!, roomID: String!, deleted: Boolean!): Group!
    editGroup(id: ID!, userID: String!, roomID: String!, deleted: Boolean!): Group!
    deleteGroup(id: ID!): Group!
  }
`;

module.exports = typeDefs;


