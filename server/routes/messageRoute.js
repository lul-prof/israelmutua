import express from "express"
import { sendMessage } from "../controllers/messageController.js"

const messageRouter=express.Router()


messageRouter.post('/send',sendMessage)

export default messageRouter