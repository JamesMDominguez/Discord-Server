const {gql} = require('apollo-server');

const typeDefs = gql`
  type Member {
    id: ID!
    userID: String!
    serverID: String!
    deleted: Boolean!
    user: User!
  }

  type Channel {
    id: ID!
    name: String!
    serverID: String!
    messages: [Message!]!
  }

  type User {
    id: ID!
    name: String!
    email: String! 
    profile_image: String!
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
    members: [Member]
  }


  type Query {
    getMessages(serverID: String!): [Message],
    getUser(id: ID!): User,
    getMember(id: ID!): [Member],
    getServers(id: ID!): [Server],
    getServer(id: ID!): Server!,
    getChannel(id: ID!): Channel!
  }

  type Mutation {
    createMessage(content: String!, userID: String!, serverID: String!, deleted: Boolean!): Message!
    editMessage(id: ID!, content: String!, userID: String!, serverID: String!, deleted: Boolean!): Message!
    deleteMessage(id: ID!): Message!

    createServer(name: String!, deleted: Boolean!): Server!
    editServer(id: ID!, name: String!, deleted: Boolean!): Server!
    deleteServer(id: ID!): Server!

    createUser(name: String!, deleted: Boolean!,email: String, profile_image: String): User!
    editUser(id: ID!,name: String!,email: String, profile_image: String): User!
    deleteUser(id: ID!): User!
    
    createMember(userID: String!, serverID: String!, deleted: Boolean!): Member!
    editMember(id: ID!, userID: String!, serverID: String!, deleted: Boolean!): Member!
    deleteMember(id: ID!): Member!
    
    createChannel(name: String,serverID: String,deleted: Boolean): Channel!
    editChannel(name: String,serverID: String,deleted: Boolean): Channel!
    deleteChannel(id: ID!): Channel!
  }
`;

module.exports = typeDefs;


