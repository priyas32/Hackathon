const express = require("express");
const { messageHandler } = require("../controllers/controller");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("<h1>Jatin</h1>")
})

router.post("/message",messageHandler);

module.exports = router;