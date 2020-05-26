import Sequelize, { Model } from 'sequelize';

class Tenant extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        birtday: Sequelize.DATE,
        phone: Sequelize.INTEGER,
        cpf: Sequelize.INTEGER,
        email: Sequelize.STRING,
        accountable: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Apartment, {
      foreignKey: 'apartment_id',
      as: 'apartment',
    });
  }
}

export default Tenant;
