import {MongoDataSource} from 'apollo-datasource-mongodb'

class Message extends MongoDataSource {

  async getMessages(id) {
    return await this.model.find({channelID: id, deleted: false});
  }

  async createMessage(args) {
    return await this.model.create(args);
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
