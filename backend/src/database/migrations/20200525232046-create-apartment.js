module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('apartments', {
      id: {
        type: Sequelize.INTEGER,
        alloyNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      block: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
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
    return queryInterface.dropTable('apartments');
  },
};
