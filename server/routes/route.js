const express = require("express");
const { messageHandler, smsHandler, communityHandler } = require("../controllers/controller");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("<h1>Jatin</h1>")
})

router.post("/message",messageHandler);

router.post("/message-sos",smsHandler);

router.get("/community",communityHandler);

module.exports = router;