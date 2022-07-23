const express = require('express')

//const data=require("./expProjJ.json")
const app = express();
const port = process.env.PORT || 8080;

 const students={
  results: [
  "Rajesh",
  "Ramesh",
  "Sayali",
  "Sanjana"
  ]
 }
 app.get("/",(req,res)=>{
     
    
  res.send("hi")
})

app.get("/student/studentsList",(req,res)=>{
     
    
    res.send(students)
})

app.listen(port, ()=> {
  console.log(`Server running on port ${port}`)
});
