const resolvers = {

  Query: {
    getMember: async (_, { id }, { dataSources }) => {
      return dataSources.members.getMember(id);
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
    }
  },
  Server: {
    member: (server, _, { dataSources: {members} }) =>  members.getMember(server._id),
    message: (server, _, { dataSources: {messages} }) =>  messages.getMessages(server._id)
  },
  Member: {
    user: (member, _, { dataSources: {user} }) =>  user.getUser(member.userID)
  }
}

module.exports = resolvers;