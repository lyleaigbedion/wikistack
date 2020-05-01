const express = require('express');
const morgan = require('morgan');
const { db } = require('./models');//STILL REQIURED TO RUN
const models =  require('./models');// gives us access to any and all values exported from './models' folder
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

const layout = require("./views/layout");

db.authenticate().
then(() =>{
  console.log("connected to the database");
});

const init = async () => {
  try{
    await models.db.sync({force: true});
    console.log("The database for the models was (re)created!")
  } catch(error){ console.error(error)}

};

init();


const app =  express(); //runs express

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public/"));//path where static files exist
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);


app.get("/",(req,res, next)=>{
  res.redirect("/wiki");
});

const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`App listening on ${PORT}`);
});


