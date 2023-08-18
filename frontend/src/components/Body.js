import React,{useState} from 'react'

import Category from "./Category";

import Header from "./Header";

import Offers from './Offers';

import {Outlet} from "react-router-dom"



const Body = () => {
 
  
  const [shimmer,setShimmer] = useState(true);
 
  return (
    <div>
        <Header/>
         <div className='px-14 py-4'>
            <Offers />
         </div>
         {/* <Category/> */}
         <Outlet/>
    </div>
  )
}


export default Body;




