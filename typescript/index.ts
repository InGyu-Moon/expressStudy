import express from 'express';
import mongoose from 'mongoose';
import userRouter from './src/controllers/user';

const app = express()
const port = 3000

app.use(express.json());


app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect('mongodb+srv://root:1234@cluster0.1pwaaf2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('success');
})