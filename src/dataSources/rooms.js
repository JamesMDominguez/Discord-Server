const data = require('apollo-datasource-mongodb')

class Rooms extends data.MongoDataSource {

  async getRooms(id) {
    return await this.model.find({messagesID: id, deleted: false});
  }

  async getRoom(id) {
    return await this.findOneById(id);
  }

  async createRoom(args) {
    console.log(args)
    return await this.model.create(args);
  }

  async editRoom(args) {
    await this.model.updateOne({_id: args.id}, {$set: args})
    return await this.findOneById(args.id)
  }

  async deleteRoom(id){
    await this.model.updateOne({_id: id}, {$set: {deleted: true}})
    return await this.findOneById(id)
  }
}
module.exports = Rooms;