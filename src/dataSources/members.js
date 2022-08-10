import {MongoDataSource} from 'apollo-datasource-mongodb'

class Members extends MongoDataSource {

  async getMembers(id) { // Gets a list of users who are in a group
    return await this.model.find({serverID: id, deleted: false});
  }

  async getUserMembers(id) { // Gets a list of users who are in a group
    return await this.model.find({userID: id, deleted: false});
  }

  async createMember(args) { //deletes a user from a group
    return await this.model.create(args);
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
export default Members;