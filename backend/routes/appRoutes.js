var express = require('express');
var router = express.Router();
var formation = require('../models/formationSchema');

router.post('/create',(req,res,next) => {
var newformation= new formation({sujet:req.body.sujet, Plan : req.body.plan });
        newformation.save((err,form) => {
          if(err)
          res.status(500).json({errmsg:err});

        res.status(200).json({msg: form});
      });
      
});

router.get('/read',(req,res,next) => {
   formation.find({},(err,forms)=> {
        if(err)
          res.status(500).json({errmsg:err});

        res.status(200).json({msg:forms});
    });
    
});

router.put('/update',(req,res,next) => {
   
    formation.findById(req.body._id,(err,forms) =>{
        if(err)
          res.status(500).json({errmsg:err});
          forms.sujet=req.body.sujet;
          forms.plan=req.body.plan;
          forms.save((err,forms) => {
            if(err)
            res.status(500).json({errmsg:err});
  
          res.status(200).json({msg: forms});
        });
        
    });
});
router.delete('/delete/:id',(req,res,next) => { 
    formation.findOneAndRemove({_id : req.params.id},(err,form)=>{
        if(err)
        res.status(500).json({errmsg: err});
        res.status(200).json({msg: form});
    });
});

module.exports = router;