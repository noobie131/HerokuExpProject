const express = require('express')
const fs = require("fs");
//let studs = require("./expProjJ.json");

const bodyParser = require('body-parser');
let nn;
let dat;

const resp={
    "result": "Success"
   }
//const test={studentFirstName:"bb",collegeName:"ss",location:"kk"}
//studs.push(test)
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json());


app.post("/student/add",(req,res)=>{
     
    nn=req.body
    fs.writeFile("expProjJ.json", JSON.stringify(nn), err => {
     
        // Checking for errors
        if (err) throw err; 
       
        console.log("Done writing"); 
    });

    res.send(resp)
})




app.get("/student/getDetails",(req,res)=>{

    fs.readFile("expProjJ.json", function(err, data) {
      
        // Check for errors
        if (err) throw err;
       
        // Converting to JSON
         dat = JSON.parse(data);
    });
    res.send(dat)
})

app.listen(port, ()=> {
  console.log(`Server running on port ${port}`)
});
