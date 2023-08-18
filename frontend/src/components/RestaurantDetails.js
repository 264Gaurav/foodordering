import React, {useState,useEffect } from 'react'
import {useParams} from "react-router-dom"
import {restaurantDetailsURL} from "../Config";

import Shimmer from './Shimmer';
import MenuShimmer from './MenuShimmer';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';


const filterData=(searchText,restaurantDishes)=>{
   const restaurantName=restaurantDishes;
  //  console.log(restaurantName);
}


const RestaurantDetails = () => {
  const {id} =useParams();

  const [AddedToCart,setAddedToCart]=useState(false);

  const [searchText,setSearchText]=useState("");
  // console.log(searchText);
  const [restaurantDishes,setRestaurantDishes]=useState([]);

  // restauran name and details for card

  const [restaurant,setRestaurant]=useState();

  
  useEffect(()=>{
     getRestaurantDetails();
  },[]);

  const dispatch=useDispatch();

  const handleAddItem=(items)=>{
    setAddedToCart(!AddedToCart);
    dispatch(addItem(items));
  }
  
  const handleRemoveItem=()=>{
     setAddedToCart(!AddedToCart);
  }


  const getRestaurantDetails=async()=>{
     try {
      const data=await fetch(restaurantDetailsURL+id);
      const json=await data.json();
      console.log(json)
      
      setRestaurant(json.data.cards[0].card.card.info);
    //  console.log(json.data.cards[0].card.card.info);
       console.log(id)

      const originalArray=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
      const NewRestaurantDeatils=originalArray.slice(1);
      // console.log(NewRestaurantDeatils);
      setRestaurantDishes(NewRestaurantDeatils);
     } catch (error) {
        //  console.log("Api can not be called"+error);
     }
  }


  return restaurantDishes.length<=0?<MenuShimmer/>:(
    <>
    <div className='px-16'>
        <div >
            
          <div className='px-16'>
            <div className='flex justify-between px-16'>
               <span className='text-[10px] text-gray-500'>Home / Gorakhpur / Restaurant Name </span>
               <input onKeyUp={()=>filterData(searchText,filterArr)} onChange={(e)=>{setSearchText(e.target.value)}} className='border border-gray-400 rounded-full px-8 py-2 focus:outline-none' type="text" placeholder='search For dish'/>
            </div>

            
         </div>
           

          <div className='px-16 my-4'>
            <div className='border-b border-dashed flex flex-col mx-16 bg-gray-800 px-16 py-8 text-white'>

              <div className='flex gap-12'>
              <div>
                <img width={300} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bzupoiynxjbgogvumixa" alt="" />
              </div>
              <div className='flex flex-col gap-14'>

                <div>
                  <p className='text-xl font-bold'>{restaurant.name}</p>
                  <p className='text-lg pt-4'>{restaurant.cuisines.join(" ")}</p>
                </div>
  
                <div className='flex gap-10'>
                 <div>
                    <h1>{restaurant.avgRating} Satrs</h1>
                    <h1>{restaurant.totalRatings}+ Rating</h1>
                 </div>
                 <div className='border-r-2 border-l-2 border-white px-6'>
                    <h1>Delivery Time</h1>
                 </div>
                 <div>
                    <h1>{restaurant.costForTwo/100}</h1>
                    <h1>Cost for two</h1>
                 </div>
              </div>


              </div>
              </div>

            

            </div>
           </div>
            


{restaurantDishes.map((item, index) => {
 
        
      

        return (
          <div key={index}>
              <div key={index}>
                  {
                    item?.card?.card?.itemCards &&  item?.card?.card?.itemCards.map((items,index)=>{
                    return(

                     items.card.info.imageId &&
                       <div key={index} className=' px-32 '>

                        <div className='flex border-b-2 border-gray-300 py-8 gap-32'>
                            <div className='w-[60%]'>
                               <div>
                                 <h1 className='text-lg font-bold text-gray-700'>{items.card.info.name}</h1>
                                 <p>{`₹ ${items.card.info.price/100}`}</p>
                               </div>

                               <div className='py-3'>
                                 <p className='text-sm text-gray-500'>
                                    { items.card.info.description }
                                 </p>
                               </div>
                               
                            </div>
                            <div>
                                <img className='rounded-lg absolute border-2 border-gray-400' width={180} src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${items.card.info.imageId}`} alt="" />
                                
                                
                               {/* {
                                
                                AddedToCart?

                                <button 
                                onClick={()=>handleRemoveItem(items)}
                                className='px-4 relative top-[-15] py-1 border border-gray-400 rounded text-green-500 font-bold bg-gray-100'>
                                   Remove
                               </button>: */}

                                <button 
                                     onClick={()=>handleAddItem(items)}
                                     className='px-4 hover:bg-blue-600 hover:text-white relative top-[-15] py-1 border border-gray-400 rounded text-green-500 font-bold bg-gray-100'>
                                        ADD
                                </button>

                                
                                
                                {/* } */}





                            </div>
                        </div>
                         
                       </div>
                    )
                    })
                  }
              </div>
          </div>
        );
      })}


        </div>
      </div>  
    </>
  )
}

export default RestaurantDetails;

