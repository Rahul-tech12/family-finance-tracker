import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import userRoute from './routes/userRoute.js'
import cors from 'cors'

const app=express();
dotenv.config();
connectDb()

//middlewares
app.use(express.json())
app.use(cors())
app.use('/api/v1/auth',userRoute);

app.get('/',(req,res)=>{
    res.send('Welcome to server')
})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})