const resolvers = {

  Query: {
    getMembers: async (_, { id }, { dataSources }) => {
      return dataSources.members.getMembers(id);
    },
    getMessages: async (_, { serverID }, { dataSources }) => {
      return dataSources.messages.getMessages(serverID);
    },
    getServers: async (_, { id }, { dataSources }) => {
      return dataSources.server.getServers(id);
    },
    getServer: async (_, { id }, { dataSources }) => {
      return dataSources.server.getServer(id);
    },
    getChannel:  async (_, { id }, { dataSources }) => {
      return dataSources.channel.getChannel(id);
    }
  },

  Mutation: {
    createServer: async (_, args, { dataSources }) => {
      return dataSources.servers.createServer(args)
    },
    createMessage: async (_, args, { dataSources }) => {
      return dataSources.messages.createMessage(args)
    },
    createMember: async (_, args, { dataSources }) => {
      return dataSources.members.createMember(args)
    },
    createUser: async (_, args, { dataSources }) => {
      return dataSources.users.createUser(args)
    },
    createChannel: async (_, args, { dataSources }) => {
      return dataSources.channel.createChannel(args)
    },

    editServer: async (_, args, { dataSources }) => {
      return dataSources.servers.editServer(args)
    },
    editMessage: async (_,args,{dataSources}) => {
      return dataSources.messages.editMessage(args)
    },
    editUser: async (_,args,{dataSources}) => {
      return dataSources.users.editUser(args)
    },
    editMember: async (_,args,{dataSources}) => {
      return dataSources.members.editMember(args)
    },
    editChannel: async (_,args,{dataSources}) => {
      return dataSources.channels.editChannel(args)
    },

    deleteServer: async (_,args,{dataSources}) => {
      return dataSources.servers.deleteServer(args.id)
    },
    deleteMessage: async (_,{id},{dataSources}) => {
      return dataSources.tasks.deleteMessage(id)
    },
    deleteMember: async (_,{id},{dataSources}) => {
      return dataSources.members.deleteMember(id)
    },
    deleteUser: async (_,{id},{dataSources}) => {
      return dataSources.users.deleteUser(id)
    },
    deleteChannel: async (_,{id},{dataSources}) => {
      return dataSources.channels.deleteChannel(id)
    }

  },
  Server: {
    members: (server, _, { dataSources: {members} }) =>  members.getMembers(server._id),
    channels: (server, _, { dataSources: {channels} }) =>  channels.getChannels(server._id)
  },
  Channel: {
    messages: (channel, _, { dataSources: {messages} }) =>  messages.getMessages(channel._id)
  },
  Member: {
    user: (member, _, { dataSources: {user} }) =>  user.getUser(member.userID)
  }
}

module.exports = resolvers;