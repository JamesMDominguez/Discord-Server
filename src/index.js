require("dotenv").config({ debug: true });
const mongoose = require("mongoose");
const myServer = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const Member = require("./models/member");
const Message = require("./models/message");
const Server = require("./models/server");
const User = require("./models/user");
const Channel = require("./models/channel");


const Members = require("./dataSources/members");
const Messages = require("./dataSources/messages");
const Servers = require("./dataSources/Servers");
const Users = require("./dataSources/users");
const Channels = require("./dataSources/channels");

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
