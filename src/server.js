// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// import route
import route from './routes/recipe.route'


// initialize express
const app = express();

// config dot-env
dotenv.config();

// configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useCreateIndex : true , useUnifiedTopology: true }) 
.then((next) => {
    console.log('successfully connected to mongodb')
    next;
})
.catch(e => {
     console.log(e)
     console.log('not connected')
})


// app.use(bodyParser.json({ extended: true }));

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

// export app to test
export default app;