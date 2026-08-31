import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import dns from "dns";
import messageRouter from "./routes/messageRoute.js"

//configurations
dns.setServers([
  "8.8.8.8",
  "8.8.4.4",
  "[2001:4860:4860::8888]",
  "[2001:4860:4860::8844]",
]);
dotenv.config()
const app=express()
const port=process.env.PORT

//Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));



//Routes
app.get('/',(req,res)=>{
    res.send('App running successfully')
})

app.use('/api/message/',messageRouter)

app.listen(port,()=>{
    console.log(`App Started on http://localhost:${port}`);
    
})