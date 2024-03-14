const express = require("express");
const router = require("./routes/route");
const app = express();

require("dotenv").config();
require("./db/connect");

app.use(express.json());
app.use("/",router);

app.listen(4000,()=>{
    console.log("Server Connected at Port 4000");
});