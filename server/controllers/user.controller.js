const express = require('express'),
      httpStatusCode=require('http-status-codes'),
      router=express.Router();

const User=require('../models/user.model');

//get data method
router.get('/',(req,res)=>{
  User.find().then(docs=>{
      res.send(docs);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err); 
    })
});

//get data by id method
router.get('/:id', (req, res) => {
  let id=req.params.id;
  User.findById(id).then(docs => {
    res.send(docs);
  }).catch(err => {
    res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
  })
});

//post data method
router.post("/", (req, res) => {
  const obj=req.body;
  User.create(obj).then(doc => {
      res.status(httpStatusCode.CREATED).send(doc);
    }).catch((err) => {
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    });
});

//Update data method
router.put("/:id", (req, res) => {
  let id=req.params.id;
  const obj = req.body;
  User.findByIdAndUpdate(id,{name:obj.name,contact:obj.contact,address:obj.address},(err,doc)=>{
    if(err){
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    }else{
      res.status(httpStatusCode.OK).send(doc);
    }
  });
});

//Delete by id method
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  const obj = req.body;
  User.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    } else {
      res.send(doc);
    }
  });
});

//Register user
router.post('/register',(req,res)=>{
  let userData=req.body 
  let newUser= new User(userData)
  newUser.save((error,registerUser)=>{
    if(error){
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(error);
    }
    else{
      res.status(httpStatusCode.OK).send(registerUser);
    }
  });
});

//Login 
router.post('/login',(req,res)=>{
  let userData=req.body
  User.findOne({email:userData.email},(error,user)=>{
    if(error) {
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(error);
    }
     else{
       if(!user){
         res.status(httpStatusCode.UNAUTHORIZED).send('Invalid email');
       }else
        if(user.password !== userData.password){
          res.status(httpStatusCode.UNAUTHORIZED).send('Invalid password');
        }else{
           res.status(httpStatusCode.OK).send(user);
        }
    }
  });
});

module.exports=router;
