// const mongoose=require("mongoose");
// const bcrypt=require("bcrypt");

// const userSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     phone:{
//         type:Number,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }

// })

// // ========= it is also a way to encrypt the password=======================


// // userSchema.pre("save", async function(next){
// //     if(this.isModified('password'))
// //     {
// //         this.password=await bcrypt.hash(this.password,10);
// //         this.cpassword=await bcrypt.hash(this.cpassword,10);
// //     }

// //     next();
// // })


// const User=mongoose.model('USER',userSchema);
// module.exports=User; 


const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            phone:{
                type:Number,
                required:true
            },
            password:{
                type:String,
                required:true
            }

})

const User=mongoose.model("USER",userSchema);
module.exports=User;