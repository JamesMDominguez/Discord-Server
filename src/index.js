import 'dotenv/config'
import mongoose from "mongoose"

import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import express from 'express';

import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { makeExecutableSchema } from '@graphql-tools/schema';

import typeDefs from './schema.js';
import resolvers from './resolvers.js';

import Member from './models/member.js';
import Message from './models/message.js';
import Server from './models/server.js';
import User from './models/user.js';
import Channel from './models/channel.js';

import Members from './dataSources/members.js';
import Messages from './dataSources/messages.js';
import Servers from './dataSources/servers.js';
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

  const app = express();
  const httpServer = createServer(app);
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema,
    dataSources,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer }),

      // Proper shutdown for the WebSocket server.
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });


  const serverCleanup = useServer({ schema }, wsServer);

  await server.start();
  server.applyMiddleware({
    app,
    path: '/'
  });

  httpServer.listen( process.env.PORT || 4000 , () => {
    console.log(`Apollo Server on http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`);
  });




