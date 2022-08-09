const data = require('apollo-datasource-mongodb')

class Servers extends data.MongoDataSource {

  async getServers(id) {
    return await this.model.find({messagesID: id, deleted: false});
  }

  async getServer(id) {
    return await this.findOneById(id);
  }

  async createServer(args) {
    console.log(args)
    return await this.model.create(args);
  }

  async editServer(args) {
    await this.model.updateOne({_id: args.id}, {$set: args})
    return await this.findOneById(args.id)
  }

  async deleteServer(id){
    await this.model.updateOne({_id: id}, {$set: {deleted: true}})
    return await this.findOneById(id)
  }
}
module.exports = Servers;