module.exports = async () => {
    const Tweet = require("./models/Tweet");
    const User = require("./models/User");
    //Custom Error Handler
    const errHandler = (err)=>{
        console.log("Error: ", err);
    }
    const user = await User.create({username:"Alex Baldwin", password:"12345"}).catch(errHandler);

}
