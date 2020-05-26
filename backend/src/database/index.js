import Sequelize from 'sequelize';

import User from '../app/models/User';
import Apartment from '../app/models/Apartment';
import Tenant from '../app/models/Tenant';

import databaseConfig from '../config/database';

const models = [User, Apartment, Tenant];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
