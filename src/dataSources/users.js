const data = require('apollo-datasource-mongodb')

class User extends data.MongoDataSource {

  async getUser(id) {
    return await this.model.find({messagesID: id, deleted: false});
  }

  async getUser(id) {
    return await this.findOneById(id);
  }

  async createUser({ name, deleted }) {
    return await this.model.create({name, deleted });
  }

  async editUser(args) {
    await this.model.updateOne({_id: args.id}, {$set: args})
    return await this.findOneById(args.id)
  }

  async deleteUser(id){
    await this.model.updateOne({_id: id}, {$set: {deleted: true}})
    return await this.findOneById(id)
  }

}
module.exports = User;