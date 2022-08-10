import {MongoDataSource} from 'apollo-datasource-mongodb'

class Message extends MongoDataSource {

  async getMessages(id) {
    return await this.model.find({serverID: id, deleted: false});
  }

  async createMessage({ content, userID, serverID, deleted }) {
    return await this.model.create({ content, userID, serverID, deleted });
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
export default Message;
