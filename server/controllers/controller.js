const Message = require("../models/MessageSchema");

const messageHandler = async (req,res)=>{
  try {
    const message = new Message(req.body);
    console.log(req.body);
    const data = await message.save();
    res.status(202).json(data);
  } catch (error) {
    console.log(error);
    res.end();
  }
}

module.exports = {messageHandler};