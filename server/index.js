const express = require("express");

const mongooes = require('mongoose');
const cors = require('cors')

const app = express();
app.use(express.json()) // to parse json data
app.use(cors()) // to allow cross origin request


const UserModel = require('./models/User')
mongooes.connect("mongodb://127.0.0.1:27017/user");


app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/login', (req,res)=> {
    const {email,password} = req.body
    UserModel.findOne({email:email})
    .then(user => {
        if(user.password === password){
            res.json({status:"success",user:user})
        }else{
            res.json({status:"error",message:"Password is incorrect"})
        }
    })
    .catch(err => res.json({status:"error",message:"User not found"}))
})


app.listen(3001,()=>{
    console.log("Serve is running at 3001")
})