module.exports = async () => {
    const Tweet = require("./models/Tweet");
    const User = require("./models/User");

    //Associate models
    User.hasMany(Tweet,{as:"Tweets", foreignKey: "userId"});
    Tweet.belongsTo(User, {as:"User", foreignKey: "userId"});

    //Custom Error Handler
    const errHandler = (err)=>{
        console.log("Error: ", err);
    }
    const user = await User.create({username:"Alex Baldwin", password:"12345"}).catch(errHandler);
    const tweet = await Tweet.create({content: "This is a new tweet with the sound of heaven.", userId: user.id}).catch(errHandler)

  const usersAll = await User.findAll({
      where: {username: "Alex Baldwin"},
      include:[{model: Tweet, as: "Tweets"}]
  }).catch(errHandler)


}
