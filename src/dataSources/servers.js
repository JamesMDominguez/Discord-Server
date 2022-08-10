import {MongoDataSource} from 'apollo-datasource-mongodb'

class Servers extends MongoDataSource {

  async getServers(serverIDs) {
    return await this.model.find({_id: { $in: serverIDs }});
  }

  async getServer(id) {
    return await this.findOneById(id);
  }

  async createServer(args) {
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
export default Servers;