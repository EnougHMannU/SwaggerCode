const express = require("express")
const app= express();
const port=5000;
app.use(express.json());

app.put('/puterdata/:id',(req,res)=>{
    res.send({
        message:"put succesfully",
        data:req.body,
        rollno:req.params.id
    })
})

app.listen(port,()=>{
    console.log("param startup at port:"+port);
})