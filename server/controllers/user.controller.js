const express = require('express'),
      httpStatusCode=require('http-status-codes'),
      router=express.Router();

const user=require('../models/user.model');
//get data method
router.get('/',(req,res)=>{
  user.find().then(docs=>{
      res.send(docs);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err); 
    })
});
//post data method
router.post("/", (req, res) => {
  const obj=req.body;
  user.create(obj).then(doc => {
      res.status(httpStatusCode.CREATED).send(doc);
    }).catch((err) => {
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    });
});
module.exports=router;

