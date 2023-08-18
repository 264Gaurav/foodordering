import React,{useState} from 'react'
import GHFlag from "../asset/ghflag.svg";
import {imageCDN} from "../Config"
import {AiTwotoneHeart} from "react-icons/ai"




const Card=({item})=>{

    //  const restaurantname= {item.info.name};
    const [addToCart,setAddToCart]=useState(false);
  
     const handleAddToCart=()=>{
         setAddToCart(!addToCart);
     }

   
  
  
    return(
      <>
        
          <div className='border-2 border-gray-300 rounded hover:scale-105 transform transition-all duration-300'>
                    <div className='absolute'>
                        <div className="relative bg-gray-500 p-1 flex  justify-end rounded-full top-[4px] left-[4px] cursor-pointer">
                          <AiTwotoneHeart onClick={handleAddToCart} className={`text-[25px] ${addToCart?"text-red-500":'text-white'}`}/>
                        </div>
                        
                    </div>

                    <div>
                    <div>
                        <img src={`${imageCDN}${item.info.cloudinaryImageId}`} alt="image" />
                     </div> 
                    
                     <div className='flex justify-between'>
                        <h1 className='pt-2 px-3 font-semibold'>
                            
                            {/* {item.info.name} */}
                         {
                            item.info.name.length<28?item.info.name:item.info.name.slice(1,28)+"..."
                         }
                            
                            </h1>
                     </div>

                     <div className='pt-2 flex gap-2 px-3 items-start'>
                         <span className='text-[12px] text-gray-700'>
                            {
                                item.info.cuisines.length<30?item.info.cuisines.join(", ").slice(1,45):""
                            }
                         </span>
                     </div>
  
                     <div className='pt-2 pb-10 flex px-3 leading-6 justify-between'>
                        <div className='flex '>
                            <div className={` ${item.info.avgRating<4 ? "bg-orange-500" : "bg-green-600"} px-2 rounded flex items-center gap-[1px]`}><span className='text-white'>☆</span><span className='flex text-sm  text-white' >{item.info.avgRating}</span></div>
                        </div>

                        <div  className='flex items-center justify-center gap-2'>
                            <p className='flex text-sm'>{item.info.sla.slaString}</p>
                        </div>

                        <div  className='flex items-center justify-center gap-2'>
                            <p>{item.info.costForTwo}</p>
                        </div>
                     </div>
                    </div>
                    
  
                  </div>
         
      </>
    )
  }

  export default Card;