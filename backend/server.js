// const express=require("express");
// const app=express();

// require('dotenv').config();
// require("./db/connection")




// const PORT=process.env.PORT || 4000;



// app.use(express.json());
// app.use(require("./router/authentication"));

// app.get('/',(req,res)=>{
//    res.send("I am Running on server");
// })



// app.listen(PORT,()=>{
//   console.log(`server is running on port number ${PORT}`);
// })



const express=require("express");
const app=express();




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next(); 
  });

require("dotenv").config();
require("./db/connection")

app.use(express.json());
app.use(require("./router/authentication"));

const PORT=process.env.PORT || 4000;




app.get('/',(req,res)=>{
   res.send("I am Running on server");
})


app.listen(PORT,()=>{
    console.log(`App is Runnning on port Number ${PORT}`);
})


