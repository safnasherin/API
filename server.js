var express = require('express');
var app=express();
 
app.use(express.json());
app.use(express.urlencoded({
    extended:true

}));
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/class')
var student = require('./model/student.js');
app.get('/send',function(req,res){
    res.json({name:'adhi'})
});
app.post('/detail',function(req,res){
    var stud=new student({
        name:req.body.name,
        age:req.body.age,
        place:req.body.place
    });
    stud.save(function(err,response){
        if(err){
            res.send("error");

        }
        else{
            res.send("success");
        }
    });
});
app.get('/show',function(req,res){
    details.find(function(err,response){
        res.json(response);
    });
});
app.delete('/delete',function(req,res){
    var n=req.body.name
    details.deleteOne({name:n},function(err,response){
        if(err){
            res.json("error");
        }
        else{
            res.json("success");
        }
    });
});
app.listen(8001)