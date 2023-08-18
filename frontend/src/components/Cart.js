import React,{useState} from 'react'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { clearCart } from '../utils/cartSlice'
import { removeItem } from '../utils/cartSlice'
import EmptyCart from './EmptyCart'


const Cart = () => {

    const dataOfCart=useSelector(store=>store.cart.items);
    const [cartItems,setCartItems]=useState(dataOfCart);

    // const [totalPrice,setTotalPrice]=useState(0);
    var totalPrice=0;
    const dispatch=useDispatch();
    const handleClearCart=()=>{

      // console.log("cleared the whole cart");
       dispatch(clearCart());
    }

    const handleRemoveItem=(id)=>{
      //  console.log(`remove one by one ${id}`);
       dispatch(removeItem(id));
    }


  return dataOfCart.length==0? <EmptyCart/> :(
    <div>
      {dataOfCart.length>0?<button onClick={()=>handleClearCart()} className='px-2 mx-32 bg-red-500  py-1 rounded text-white font-bold'>Clear Cart</button>:""}
        {
       dataOfCart.map((items,index)=>{
        // setTotalPrice(totalPrice+items.card.info.price/100);
        totalPrice=totalPrice+items.card.info.price/100;
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
                                 <p className='text-sm text-gray-500'>{items.card.info.description}</p>
                               </div>
                               
                            </div>
                            <div>
                                <img className='rounded-lg absolute border-2 border-gray-400' width={180} src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${items.card.info.imageId}`} alt="" />
                                <button onClick={()=>handleRemoveItem(items.card.info.id)} className='px-4 relative top-[-15] py-1 border border-gray-400 bg-red-500 rounded text-white-500 font-bold'>Remove</button>
                            </div>
                        </div>
                         
                       </div>
                    )
                    })
                }

                <div className='flex justify-between px-32 py-4 bg-blue-900'>
                   <p className='text-white font-bold'>Total</p>
                   <p className='text-white font-bold'>₹ {totalPrice}</p>
                </div>
                <div className='flex justify-center px-32 py-4 bg-gray-900'>
                <button className='text-white font-bold'>Checkout</button>
                </div>

    </div>
  )
}

export default Cart
