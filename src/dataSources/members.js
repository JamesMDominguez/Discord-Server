const data = require('apollo-datasource-mongodb')

class Members extends data.MongoDataSource {

  async getMembers(id) { // Gets a list of users who are in a group
    return await this.model.find({serverID: id, deleted: false});
  }

  async createMember({ userID, serverID, deleted}) { //deletes a user from a group
    return await this.model.create({ userID, serverID, deleted});
  }

  async editMember(args) {
    await this.model.updateOne({_id: args.id}, {$set: args})
    return await this.findOneById(args.id)
  }

  async deleteMember(id){
    await this.model.updateOne({_id: id}, {$set: {deleted: true}})
    return await this.findOneById(id)
  }
}
module.exports = Members;