const Sequelize = require("sequelize");

module.exports =  sequelize.define("Tweet", {
    id:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
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
    }
});
