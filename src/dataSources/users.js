import {MongoDataSource} from 'apollo-datasource-mongodb'

class User extends MongoDataSource {

  async getUser(id) {
    return await this.findOneById(id);
  }

  async createUser(args) {
    return await this.model.create(args);
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
export default User;