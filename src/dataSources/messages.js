const data = require('apollo-datasource-mongodb')

class Message extends data.MongoDataSource {

  async getMessages(id) {
    return await this.model.find({roomID: id, deleted: false});
  }

  async createMessage({ message, userID, roomID, deleted }) {
    return await this.model.create({ message, userID, roomID, deleted });
  }

  async editMessage(args) {
    await this.model.updateOne({_id: args.id}, {$set: args})
    return await this.findOneById(args.id)
  }

  async deleteMessage(id){
    await this.model.updateOne({_id: id}, {$set: {deleted: true}})
    return await this.findOneById(id)
  }
}
module.exports = Message;
