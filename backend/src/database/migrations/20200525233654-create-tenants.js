module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tenants', {
      id: {
        type: Sequelize.INTEGER,
        alloyNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      birtday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        alloyNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        alloyNull: false,
      },
      accountable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      apartment_id: {
        type: Sequelize.INTEGER,
        references: { model: 'apartments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('tenants');
  },
};
