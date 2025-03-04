const dotenv = require("dotenv");
dotenv.config({
    path:"./.env"
});
const app = require("./app");
const port = process.env.PORT || 3000;
const DbConnection = require("./Db/Db.connection");
DbConnection()
.then(()=>{
    app.listen(port , ()=>{
        console.log(`server is connected to port ${port}`);
    })
})
.catch((error)=>{
    console.log("error from DbConnection! " , error);
})