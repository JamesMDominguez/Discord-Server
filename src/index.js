require("dotenv").config({ debug: true });
const mongoose = require("mongoose");
const myServer = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const Group = require("./models/group");
const Message = require("./models/message");
const Room = require("./models/room");
const User = require("./models/user");

const Groups = require("./dataSources/groups");
const Messages = require("./dataSources/messages");
const Rooms = require("./dataSources/rooms");
const Users = require("./dataSources/users");

const main = async () =>
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
main()
  .then(console.log("🎉 connected to database successfully"))
  .catch((error) => console.error(error));
const dataSources = () => ({
  groups: new Groups(Group),
  messages: new Messages(Message),
  rooms: new Rooms(Room),
  users: new Users(User)
});
const server = new myServer.ApolloServer({ typeDefs, resolvers, dataSources });
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
