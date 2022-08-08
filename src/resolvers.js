const resolvers = {

  Query: {
    getGroup: async (_, { id }, { dataSources }) => {
      return dataSources.groups.getGroup(id);
    },
    getMessages: async (_, { roomID }, { dataSources }) => {
      return dataSources.messages.getMessages(roomID);
    },
    getRooms: async (_, { id }, { dataSources }) => {
      return dataSources.room.getRooms(id);
    },
    getRoom: async (_, { id }, { dataSources }) => {
      return dataSources.room.getRoom(id);
    },
  },

  Mutation: {
    createRoom: async (_, args, { dataSources }) => {
      return dataSources.rooms.createRoom(args)
    },
    createMessage: async (_, args, { dataSources }) => {
      return dataSources.messages.createMessage(args)
    },
    createGroup: async (_, args, { dataSources }) => {
      return dataSources.groups.createGroup(args)
    },
    createUser: async (_, args, { dataSources }) => {
      return dataSources.users.createUser(args)
    },

    editRoom: async (_, args, { dataSources }) => {
      return dataSources.rooms.editRoom(args)
    },
    editMessage: async (_,args,{dataSources}) => {
      return dataSources.messages.editMessage(args)
    },
    editUser: async (_,args,{dataSources}) => {
      return dataSources.users.editUser(args)
    },
    editGroup: async (_,args,{dataSources}) => {
      return dataSources.groups.editGroup(args)
    },

    deleteRoom: async (_,args,{dataSources}) => {
      return dataSources.rooms.deleteRoom(args.id)
    },
    deleteMessage: async (_,{id},{dataSources}) => {
      return dataSources.tasks.deleteMessage(id)
    },
    deleteGroup: async (_,{id},{dataSources}) => {
      return dataSources.groups.deleteGroup(id)
    },
    deleteUser: async (_,{id},{dataSources}) => {
      return dataSources.groups.deleteUser(id)
    }
  },
  Room: {
    group: (room, _, { dataSources: {group} }) =>  group.getGroup(room._id),
    message: (room, _, { dataSources: {message} }) =>  message.getMessages(room._id)
  },
  Group: {
    user: (group, _, { dataSources: {user} }) =>  user.getUser(group.userID)
  }
}

module.exports = resolvers;