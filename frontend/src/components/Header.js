import React, { useState, useEffect, useContext } from 'react';
import "./global.css";


import Logo from "../asset/GH_logo_svg.svg";
import { BsCart3 } from "react-icons/bs";

import { BsFillBagPlusFill } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

import useOnline from "../utils/useIsOnline";

import { Link } from 'react-router-dom';

import userContext from '../utils/userContext';

import { useSelector } from "react-redux"

const Title = () => {
    return (
        <>
            <Link to="/">
                <div className="flex text-sm text-white px-12">
                    {/* <MdOutlineFoodBank className="text-orange-500"/> */}
                    <img width={96} src={Logo} alt="logo" />
                </div>
            </Link>
        </>
    )
}

const Header = () => {

    const cartItem = useSelector(store => store.cart.items);
    const user1=useSelector(store=>store.user.user);
    console.log("user is"+user1);


    const { user } = useContext(userContext);
    // console.log(user.email);

    const isOnline = useOnline();

    const [buttonBG, setButtonBG] = useState(false);
    const handleClick = () => {
        setButtonBG(!buttonBG);
        // console.log(buttonBG);
    }

    const [showCart, setShowCart] = useState(false);

    const handleCartClick = () => {
        setShowCart(!showCart);
        // console.log(showCart);
    }




    // useEffect(()=>{

    //     const handleOnline=()=>{
    //         setIsOnline(true);
    //     }

    //     const handleOffline=()=>{
    //         setIsOnline(false);
    //     }

    //     window.addEventListener('online',handleOnline)

    //     window.addEventListener('offline',handleOffline)

    //     return()=>{
    //        window.removeEventListener('online',handleOnline);
    //        window.removeEventListener('offline',handleOffline);
    //     } 

    // },[])


    return (
        <>

            <div className="px-4 py-5 flex justify-between bg-white items-center shadow-lg box-border">
               
               <div>
                  <Title />
               </div>

               <div>
                  <ul className='flex'>
                     {/* <li className='mr-4'>{user.email}</li> */}
                     <Link to="/body"><li className='mr-4 font-semibold'>Home</li></Link>
                     <Link to="about"><li className='mr-4 font-semibold'>About</li></Link>
                     <Link to="help"><li className='mr-4 font-semibold'>Help</li></Link>
                     <Link to="instamart"><li className='mr-4 font-semibold'>Instamart</li></Link>
                     <li className='mr-4 font-semibold'>Location</li>
                     {/* <Link to="/register"><li className='mr-4 font-semibold'>Register</li></Link> */}
                     <Link to="cart">
                        
                        <li className='mr-4 flex justify-center items-center'>
                            <BsCart3 className='text-[25px] text-orange-500'/> 
                            {
                                cartItem.length>0?
                                <span className='bg-green-400 px-2 rounded-full absolute top-[4px]'>
                                   {cartItem.length}
                                 </span>:""
                            }
                        </li>
                      
                      </Link>

                      <button>
                        <Link to="profilesection">
                         <FaUserCircle className='text-[26px] text-green-700'/>
                         
                         </Link>
                      </button>

                     {/* <li className='text-sm text-gray-400 mr-4'>{isOnline ? "online" : "offline"}</li> */}
                  </ul>
               </div>

            </div>
        </>
    )
}

export default Header;


