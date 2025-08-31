import express from 'express';
import aurthroutes from './Routes/authRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import { client } from '../my-backend/dbConfig.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
client.connect();
console.log("You succecssfully connected to the Mongodb");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());

app.use(authRoutes) 

app.use((req, res, next) => {
  try{
    let decoded = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
    
    next();
  }
  catch(error){
    return res.send({
      status : 0,
      error : error,
      message : "Invalid Token"
    })
  }
  
})

app.use(aurthroutes);


app.listen(port, () =>{
    console.log(`listening port ${port}`);
});