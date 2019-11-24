const express = require("express");
let app = express();
const PORT = 3000;

const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", path.resolve("./src/views"));

//Request Parsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
//Create Express Router
const router = express.Router();
app.use(router);

const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

require("./src/database/connection")
require("./src/bootstrap");

router.use((err,req,res,next)=>{
    if(err){
        return res.send(err.message);
    }
});

app.listen(PORT, err=>{
     if(err){
        return console.log(`cannot listen on PORT: ${PORT}`);
     }
     console.log(`Server is Listening on : http://localhost:${PORT}/`);
});
