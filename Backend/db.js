const mong = require("mongoose")

const mongoURL = "mongodb://127.0.0.1:27017/anime"

mong.connect(mongoURL,{
    useNewUrlparser:true,
    useUnifiedTopology:true
})

const db = mong.connection;

db.on("connected",()=>{
    console.log("created server")
})

db.on("error",(err)=>{
    console.log("server error"+err)
})

db.on("disconnected",()=>{
    console.log("server disconnected")
})

module.exports= db