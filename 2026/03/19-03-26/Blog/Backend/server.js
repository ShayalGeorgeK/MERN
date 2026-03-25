import express from 'express';
import userRouter from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/',userRouter)

app.listen(5000,()=>{
    console.log("server running on http://localhost:5000/")
})