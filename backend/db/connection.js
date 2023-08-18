const mongoose=require("mongoose");

const url=process.env.Mongo_URL;

mongoose.set("strictQuery",false);
mongoose.connect(url).
then(()=>{
console.log("Database is connected successfully");
}).catch((err)=>{
   console.log(`Error has occured ${err}`);
})