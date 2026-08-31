import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import messageRouter from "./routes/messageRoute.js"

//configurations
dotenv.config()
const app=express()
const port=process.env.PORT

//Middleware
app.use(morgan('dev'))
app.use(cors({origin:'https://israelmutua.vercel.app/contact',allowedHeaders:['Content-Type', 'Authorization'],methods:['GET','POST','PUT','DELETE'],credentials:true}))
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