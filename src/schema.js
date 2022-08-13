import {gql} from 'apollo-server-express'

const typeDefs = gql`
  type Member {
    id: ID!
    userID: String!
    serverID: String!
    deleted: Boolean!
    user: User!
    server: Server!
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
    memberships: [Member!]!
  }

  type Message {
    id: ID!
    content: String!
    userID: String!
    channelID: String!
    deleted: Boolean!
  }

  type Server {
    id: ID!
    name: String!
    deleted: Boolean!
    members: [Member!]!
    channels: [Channel!]!
  }


  type Query {
    getMessages(channelID: String!): [Message!]!,

    getUser(id: ID!): User!,

    getMembers(serverID: ID!): [Member!]!,

    getServers(userID: ID!): [Server!]!,
    getServer(id: ID!): Server!,

    getChannel(id: ID!): Channel!
    getChannels(serverID: ID!): [Channel!]!
  }

  type Mutation {
    editMessage(id: ID!, content: String!, userID: String!, channelID: String!, deleted: Boolean!): Message!
    deleteMessage(id: ID!): Message!
    createMessage(content: String!, userID: String!, channelID: String!, deleted: Boolean!): Message!

    createServer(name: String!, deleted: Boolean!, ownerID: String!): Server!
    editServer(id: ID!, name: String!, deleted: Boolean!, ownerID: String!): Server!
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

  type Subscription {
    messageCreated: Message!
  }
`;

export default typeDefs;


