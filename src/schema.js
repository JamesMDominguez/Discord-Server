const {gql} = require('apollo-server');

const typeDefs = gql`
  type Member {
    id: ID!
    userID: String!
    serverID: String!
    deleted: Boolean!
    user: [User!]!
  }

  type User {
    id: ID!
    name: String!
  }

  type Message {
    id: ID!
    content: String!
    userID: String!
    serverID: String!
    deleted: Boolean!
  }

  type Server {
    id: ID!
    name: String!
    deleted: Boolean!
    member: Member!
    message: [Message]
  }


  type Query {
    getMessages(serverID: String!): [Message],
    getUser(id: ID!): User,
    getMember(id: ID!): [Member],
    getServers(id: ID!): [Server],
    getServer(id: ID!): Server
  }

  type Mutation {
    createMessage(content: String!, userID: String!, serverID: String!, deleted: Boolean!): Message!
    editMessage(id: ID!, content: String!, userID: String!, serverID: String!, deleted: Boolean!): Message!
    deleteMessage(id: ID!): Message!

    createServer(name: String!, deleted: Boolean!): Server!
    editServer(id: ID!, name: String!, deleted: Boolean!): Server!
    deleteServer(id: ID!): Server!

    createUser(name: String!, deleted: Boolean!): User!
    editUser(id: ID!,name: String!): User!
    deleteUser(id: ID!): User!
    
    createMember(userID: String!, serverID: String!, deleted: Boolean!): Member!
    editMember(id: ID!, userID: String!, serverID: String!, deleted: Boolean!): Member!
    deleteMember(id: ID!): Member!
  }
`;

module.exports = typeDefs;


