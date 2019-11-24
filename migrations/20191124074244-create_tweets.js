'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.createTable("tweets",{
     id: {
       type: Sequelize.INTEGER(11),
       allowNull:true,
       autoIncrement:true,
       primaryKey:true,
     },
     content: Sequelize.STRING(300),
     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,
   });
  },

  down: (queryInterface, Sequelize) => {
   queryInterface.dropTable("tweets");
  }
};
