// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// import route
import route from './routes/recipe.route'

// MONGOOSE-KEY : mongodb+srv://mohammed:<password>@cluster0-satex.mongodb.net/test?retryWrites=true&w=majority

// initialize express
const app = express();

// config dot-env
dotenv.config();

// connect mongoose
mongoose.connect(`mongodb+srv://mohammed:${process.env.PASSWORD}@cluster0-satex.mongodb.net/test?retryWrites=true&w=majority`) 
.then(() => {
    console.log('successfully connected to mongodb')
})
.catch(e => {
     console.log(e)
     console.log('not connected')
})


// configure body-parser
app.use(bodyParser.json({ extended: true }));

const Port = process.env.PORT || 3000;

app.use(function (req, res, next) {
 
    // origins
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

    next();
  });

// recipe routes
app.use('/api', route);  

// app listen on port
app.listen(Port, () => {
    console.log(`app is running on ${Port}`)
})