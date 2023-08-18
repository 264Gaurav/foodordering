import React, { Fragment, lazy,Suspense,useState } from "react"
import ReactDOM  from "react-dom/client";

import LandingPage from "./components/LandingPage";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantDetails from "./components/RestaurantDetails";
import PagenotFound from "./components/PagenotFound";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Cards from "./components/Cards";
// import Login from "./components/Login";
// import Register from "./components/Register";
import UserContext from "./utils/userContext";

import {Provider} from "react-redux";

import store from "./utils/store";
import Cart from "./components/Cart";
import About from "./components/About";
import Help from "./components/Help";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/profile";



// import Instamart from "./components/Instamart";
const Instamart=lazy(() => import("./components/Instamart"));








const Applayout=()=>{

   
 
   const [user,setUser]=useState({
      name:"manoj",
      email:"pmp@gmail.com"
   })

  return(

        <Provider store={store}>
         <UserContext.Provider value={{user:user,setUser:setUser}}>
           <Outlet/>
           <Footer/>
         </UserContext.Provider>
        </Provider>
   

  )
}




const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<Applayout />,
      errorElement:<PagenotFound/>,
      children:[
         {
            path:"/",
            element:<LandingPage/>,
         },
         {
            path:"/body/",
            element:<Body/> ,
            children:[
                {
                  path:"",
                  element:<Cards/>
                },

                {
                   path:"restaurantdetails/:id",
                  element:<RestaurantDetails/>
                 },

                 {
                   path:"instamart",
                   element:<Suspense><Instamart/></Suspense>
                 },
                 {
                  path:"cart",
                  element:<Cart/>
                },
                {
                  path:"about",
                  element:<About/>
                },
                {
                  path:"help",
                  element:<Help/>
                },
                {
                  path:"profilesection",
                  element:<Profile/>
                }
            ]
         },
         
        
      ]
   },
   {
      path:"/register",
      element:<Register/>
   },
   {
      path:"/login",
      element:<Login/>
   }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
