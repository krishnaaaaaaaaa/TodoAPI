const express = require('express');
const bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();
app.use(bodyparser.json());

app.post('/todos', (req,res)=>{
  var newtodo = new Todo({
    text:req.body.text
  });
  newtodo.save().then((docs)=>{
    // console.log(docs);
    res.send(docs);
  },(err)=>{
    // console.log('error in inserting',err);
    res.status(400).send(err);
  });

});
app.post('/user', (req,res)=>{
  var newuser = new user({
    username:req.body.username
  });
  newuser.save().then((docs)=>{
    // console.log(docs);
    res.send(docs);
  },(err)=>{
    // console.log('error in inserting',err);
    res.status(400).send(err);
  });

});

app.listen(3000,()=>{
  console.log('running on port 3000');
});
