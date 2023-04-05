const express = require('express')
const cors = require('cors')
const app=express()
const User = require('./models/user')
const mongoose = require('mongoose');


app.use(cors())

app.use(express.json())
mongoose.connect('mongodb+srv://wario:2PifGoDdOdpztEar@cluster0.6h7pzbf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

app.post('/register', (req,res)=>{
    const{username,password}=req.body
    res.json({requestData:{username,email,password}})      
})


//2PifGoDdOdpztEar
//wario

app.listen(4000,() => {
    console.log('Server is running on http://localhost:4000');
  })
