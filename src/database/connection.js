const Sequelize = require("sequelize")
const sequelize = new Sequelize("socialnewtwork", 'root','root', {host:'akoko_mysql_1', dialect:'mysql', operatorAliases:false})

modules.exports = sequelize;
global.sequelize = sequelize;

