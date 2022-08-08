const data = require('apollo-datasource-mongodb')

class Groups extends data.MongoDataSource {

  async getGroup(id) { // Gets a list of users who are in a group
    return await this.model.find({roomID: id, deleted: false});
  }

  async createGroup({ userID, roomID, deleted}) { //deletes a user from a group
    return await this.model.create({ userID, roomID, deleted});
  }

  async editGroup(args) {
    await this.model.updateOne({_id: args.id}, {$set: args})
    return await this.findOneById(args.id)
  }

  async deleteGroup(id){
    await this.model.updateOne({_id: id}, {$set: {deleted: true}})
    return await this.findOneById(id)
  }
}
module.exports = Groups;