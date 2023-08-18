import React from "react";
import {createContext}  from "react";


//  const userContext=React.createContext({
//   user:{
//     name:"vinod",
//     email:"vinodpr737947"
//   }
// })

// export default userContext;
const userContext=createContext({
  user:{
    name:"vinod",
    email:"vinodpr737947"
  }
})

export default userContext;

