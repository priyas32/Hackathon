const Message = require("../models/MessageSchema");
const twilio = require("twilio");

const messageHandler = async (req,res)=>{
  try {
    const message = new Message(req.body);
    console.log(req.body);
    const data = await message.save();
    res.status(202).json(data);
  } catch (error) {
    console.log(error);
    res.status(300).json(error);
  }
}

const smsHandler = async (req,res)=>{
    try {
        const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
        console.log(req.body);
        const data = await client.messages.create({
            from:process.env.TWILIO_PHONE_NUMBER,
            to:req.body.recipient_phone,
            body:req.body.message
        });
        res.status(202).json(data);
    } catch (error) {
        console.log(error);
        res.status(300).json(error);
    }
}

const communityHandler = (req,res)=>{

}

const registerHandler = (req,res)=>{
   try {
    
   } catch (error) {
    console.log(error);
    res.status(300).json(error);
   }
}

const signUpHandler = (req,res)=>{

}

module.exports = {messageHandler, smsHandler, communityHandler, registerHandler, signUpHandler};