'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users",{
      id: {
        type: Sequelize.INTEGER(11),
        allowNull:true,
        autoIncrement:true,
        primaryKey:true,
      },
      username: {
        type:Sequelize.STRING(300),
        allowNull:true,
        unique: true,
      },
      password: {
        type:Sequelize.STRING(20),
        allowNull:false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
