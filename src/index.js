import 'dotenv/config'
import mongoose from "mongoose"
import myServer from "apollo-server"
import typeDefs from './schema.js';
import resolvers from './resolvers.js';

import Member from './models/member.js';
import Message from './models/message.js';
import Server from './models/server.js';
import User from './models/user.js';
import Channel from './models/channel.js';

import Members from './dataSources/members.js';
import Messages from './dataSources/messages.js';
import Servers from './dataSources/Servers.js';
import Users from './dataSources/users.js';
import Channels from './dataSources/channels.js';

const main = async () =>
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
main()
  .then(console.log("🎉 connected to database successfully"))
  .catch((error) => console.error(error));
const dataSources = () => ({
  members: new Members(Member),
  messages: new Messages(Message),
  servers: new Servers(Server),
  users: new Users(User),
  channels: new Channels(Channel)
});
const server = new myServer.ApolloServer({ typeDefs, resolvers, dataSources });
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
