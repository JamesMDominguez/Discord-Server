const data = require('apollo-datasource-mongodb')

class Channels extends data.MongoDataSource {

  async getChannels(id) {
    return await this.model.find({serverID: id, deleted: false});
  }

  async getChannel(id) {
    return await this.findOneById(id);
  }

  async createChannel(args) {
    return await this.model.create(args);
  }

  async editChannel(args) {
    await this.model.updateOne({_id: args.id}, {$set: args})
    return await this.findOneById(args.id)
  }

  async deleteChannel(id){
    await this.model.updateOne({_id: id}, {$set: {deleted: true}})
    return await this.findOneById(id)
  }
}
module.exports = Channels;