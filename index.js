
const Database=require("./db.js");
const database=new Database();
const express=require("express");
const { json } = require("body-parser");
const app=express();
app.use(express.json())

app.get("/blogg",(req,res)=>{
    const blogg=database.read("blogg")
    res.json(blogg)
})

app.post("/blogg",(req,res)=>{
    const data=req.body
    database.create("blogg",{...data,Date:new Date().toISOString().slice(0,10),updateDate:new Date().toISOString().slice(0,10)})
    res.send("sucess")

})

app.put("/blogg/:id",(req,res)=>{
    const id=req.params.id
    const data=req.body
   
    database.update("blogg",id,{...data,updateDate:new Date().toISOString().slice(0,10)})
    res.send("sucess")
})

app.delete("/blogg/:id",(req,res)=>{
    const id=req.params.id
    database.delete("blogg",id)
    res.send("Sucess")
})



app.listen(3000)