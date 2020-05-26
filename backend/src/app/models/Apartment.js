import Sequelize, { Model } from 'sequelize';

class Apartment extends Model {
  static init(sequelize) {
    super.init(
      {
        block: Sequelize.STRING,
        number: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Apartment;
