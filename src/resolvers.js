const resolvers = {

  Query: {
    getMembers: async (_, { serverID }, { dataSources }) => {
      return dataSources.members.getMembers(serverID);
    },
    getMessages: async (_, { channelID }, { dataSources }) => {
      return dataSources.messages.getMessages(channelID);
    },
    getServers: async (_, { userID }, { dataSources }) => {
      const members = await dataSources.members.getUserMembers(userID)
      let formatedMembers = []
      members.forEach(member => {
        formatedMembers.push(member.serverID)
      });
      return dataSources.servers.getServers(formatedMembers);
    },
    getServer: async (_, { id }, { dataSources }) => {
      return dataSources.servers.getServer(id);
    },
    getChannel:  async (_, { id }, { dataSources }) => {
      return dataSources.channels.getChannel(id);
    },
    getChannels:  async (_, { serverID }, { dataSources }) => {
      return dataSources.channels.getChannels(serverID);
    },
    getUser: async (_, { id }, { dataSources }) => {
      return dataSources.users.getUser(id);
    }
  },

  Mutation: {
    createServer: async (_, args, { dataSources }) => {
      return dataSources.servers.createServer(args)
    },
    createMember: async (_, args, { dataSources }) => {
      return dataSources.members.createMember(args)
    },
    createUser: async (_, args, { dataSources }) => {
      return dataSources.users.createUser(args)
    },
    createChannel: async (_, args, { dataSources }) => {
      return dataSources.channels.createChannel(args)
    },
    createMessage: async (_, args, { dataSources }) => {
      return dataSources.messages.createMessage(args)
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
    user: (member, _, { dataSources: {users} }) =>  users.getUser(member.userID)
  }
}

export default resolvers;