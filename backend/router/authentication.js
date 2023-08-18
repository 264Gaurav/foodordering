
const express=require("express");
const router=express.Router();
const User=require("../model/userschema");
const bcrypt=require("bcrypt");

router.post("/register",async(req,res)=>{
 
   const {name, email, phone, password}=req.body;
   if(!name || !email || !phone || !password){
      return res.status(400).json({Message:"Please fill every details"});
   }


   try {
       
      const isEmailExist=await User.findOne({email:email});
      if(isEmailExist){
         return res.status(400).json({Message:"User exist ! Please Login"});
      }


      const hashPass=await bcrypt.hash(password, 10);
      const user=new User({name, email, phone, password:hashPass});
      user.save();
      return res.status(200).json({ message: "Successfully DONE",user });
   } catch (error) {
       return  res.status(400).json({Message:"Something is wrong"});
       console.log(`galti hai kahi na kahi bhai ${error}`);
   }
})


router.post("/login",async(req,res)=>{
   
             console.log("The login request executed!");

      const {email,password}=req.body;
      if(!email || !password){
         return res.status(400).json({Message:"Please fill email and pass both"});
      }

      try {
         
         const isUserExist=await User.findOne({email:email});
         if(isUserExist){
            const user=await User.findOne({email:email});
             const isMatchedPass=await bcrypt.compare(password,user.password);
             if(isMatchedPass){
               return res.status(200).json({Message:"Login Successfully",user});
             } else{
               return res.status(400).json({Message:"Wrong Password"});
            }
         }
         else{
            return res.status(400).json({Message:"User does't Exixt"});
         }
      } catch (error) {
         return  res.status(400).json({Message:"Something is wrong outer"});
      }
})


module.exports=router;





