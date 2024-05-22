const express=require("express")
const cors=require('cors')
const app=express()
const bodyparser=require("body-parser")
const routes=require('./routes')
app.use(express.static(`${__dirname}/upload`)); 

const dbconnect=require('./dbconnection')
app.use(cors())
 app.use(bodyparser.json())

 app.use('/',routes)
 app.listen(3000)
 app.use(express.static(`${__dirname}/upload`)); 
 