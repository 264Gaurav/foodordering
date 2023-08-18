import React,{useContext, useEffect, useState} from 'react'
import Card from './Card';
import {itemsURL} from "../Config"
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import {filterRestaurant} from "../utils/Filterdata"
import UserContext from '../utils/userContext';







const Cards=()=>{
   
    const {user,setUser}=useContext(UserContext); 
    
    // console.log("initially rendered");
    const [searchText,setSearchText]=useState("");
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);

    // const [topRestaurant,setTopRestaurant]=useState([]);

     useEffect(()=>{
          getrestaurant();
          // console.log("useEffect runing")
     },[]);
   
   const getrestaurant=async()=>{
      try {
           const data=await fetch(itemsURL);
           const json=await data.json();
           setAllRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
           console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
           setFilteredRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            
            // setTopRestaurant(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants); 
            // console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
      } catch (error) {
          //  console.log("Api can't be calles"+error);
      }
   }


   const handleFilter=(order)=>{
      if(order===1){
         setFilteredRestaurant(allRestaurants);
      }
      else if(order===2){
        const sortedRestaurantsAscending = filteredRestaurant.slice().sort((a, b) =>  b.info.avgRating - a.info.avgRating);
        setFilteredRestaurant(sortedRestaurantsAscending);
      }
      else if(order===3){
        const sortedRestaurantsAscending = filteredRestaurant.slice().sort((a, b) => {
          return a.info.sla.deliveryTime - b.info.sla.deliveryTime;
        } );
        setFilteredRestaurant(sortedRestaurantsAscending);
      }

   } 

    return allRestaurants.length==0?(<Shimmer/>):(
      <>
         <div className='px-14 py-6'>
            <div className="py-2">
               
            <div className='py-4 flex justify-between'>
                
              <div className='flex gap-2'>
                <input 
                    className='border border-gray-400 px-4 py-1' 
                    type='text' 
                    placeholder="Search for Dishes"
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                        if(e.target.value==""){
                          setFilteredRestaurant(allRestaurants);
                        }
                    }}
                   
                />
                <button 
                   className='mx-0 py-[2px] bg-green-400 rounded px-2 text-white' 
                   onClick={(e)=>{
                          const data=filterRestaurant(searchText,allRestaurants);
                          setFilteredRestaurant(data);
                   }}>
                     Search
                 </button>
              </div>



                {/* <input 
                    className='border-2 border-gray-400' 
                    type='text' 
                    placeholder="search"
                    value={user.email}
                    onChange={(e)=>{
                        setUser({email:e.target.value});
                    }}
                /> */}

          <div className='mx-8 flex gap-4'>
            <span className='bg-gray-300 rounded px-2 text-black'>Sort By</span>
              <button onClick={()=>handleFilter(1)} className='bg-red-500 rounded px-2 text-white hover:bg-green-500 transition-all duration-300'>Popularity</button>
              <button onClick={()=>handleFilter(2)}  className='bg-red-500 rounded px-2 text-white hover:bg-green-500 transition-all duration-300'>Rating: High to Low</button>
              <button onClick={()=>handleFilter(3)}  className='bg-red-500 rounded px-2 text-white hover:bg-green-500 transition-all duration-300'>Delivery Time</button>
          </div>
    </div>



               {/* <div className='py-4'>
                   <div className='flex justify-between items-center py-4'>
                      <div>
                         <p className='text-[25px] font-bold text-gray-700'>Restaurants which deliver food Near you</p>
                      </div>
                      <div className='flex gap-3'>
                          <button className='text-[30px] text-gray-700  rounded-full'>→</button>
                          <button className='text-[30px] text-gray-700 rounded-full'>←</button>
                      </div>
                   </div>

                   <div className='border border-purple-600 rounded p-3'>
                     <div className='flex  gap-6 '>
                     
                     {topRestaurant.map((item)=>{
                      return ( 
                       
                            <div key={item.info.id} className='w-[400px]'>
                               <Link ><Card item={item}/> </Link>
                            </div>
                    
                      )
                    })}
                      
                      </div> 
                   </div>

               </div> */}




              <div className='grid grid-cols-4 gap-6 '>
                
                  {
                    filteredRestaurant.map((item)=>{
                      return ( 
                       
                            <div key={item.info.id}>
                              <Link to={`restaurantdetails/${item.info.id}`}><Card item={item}/> </Link>
                            </div>
                    
                      )
                    })
                  }
             </div>
               
            </div>
         </div>
         
      </>
    )
  }
  

  export default Cards;