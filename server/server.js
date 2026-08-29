import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import messageRouter from "./routes/messageRoute.js"

//configurations
dotenv.config()
const app=express()
const port=process.env.PORT
app.use(morgan('dev'))
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