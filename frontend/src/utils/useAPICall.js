// import React,{useState,useEffect} from 'react'
// import {itemsURL} from "../Config"

// const useAPICall = () => {
   
//     const [restaurant,setRestaurant]=useState([]);

//     useEffect(()=>{
//         getrestaurant();
//         console.log("useEffect runing")
//     },[]);
 
//    const getrestaurant=async()=>{
//      try {
//          const data=await fetch(itemsURL);
//          const json=await data.json();
//          setRestaurant(json.data.cards[2].data.data.cards);
//           console.log(json.data.cards[2].data.data.cards);
//     } catch (error) {
//          console.log("Api can't be calles"+error);
//     }
//  }


//  return restaurant;
// }

// export default useAPICall
