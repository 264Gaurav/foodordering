import React, {useState, useEffect } from 'react'
import Home from "../asset/home.svg"
import Diamond from "../asset/diamond.svg"
import Coin from "../asset/coin.webp"
import Logo from "../asset/logo.svg";
import "./global.css"
import Footer from './Footer';


import {Link} from "react-router-dom";

const LandingPage = () => {


      const [latitude,setLatitude]=useState();
      const [longitude,setLongitude]=useState();
      const [location,setLocation]=useState("");

    
      useEffect(()=>{

          navigator.geolocation.getCurrentPosition((data)=>{
            // console.log(data);
            setLatitude(data.coords.latitude);
            setLongitude(data.coords.longitude);
            getLocation(data.coords.latitude,data.coords.longitude);
          })
      },[])

      const getLocation=async(lat,lon)=>{
        try {
            console.log(lat);
            const data=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
            const json=data.json();
            console.log("jay");
            setLocation(json.display_name);
        } catch (error) {
            console.log(error);
        }
    }
    
    console.log(location);

     


   

    return (
        <>
            <div>

                <div className='h-[100vh] grid grid-cols-2'>

                    <div className='landing_pagae_background'>
                        <img width="148px" src={Logo} className='absolute left-[32px] top-[32px] visible' alt="logo" />
                    </div>






                    <div className="grid h-screen p-8">
                        <div className="">
                           
                        <ul className='flex gap-6 justify-end'>
                                <Link to="/body"><li className='text-[20px] font-bold text-purple-500 cursor-pointer'>Order in the App</li></Link>
                                <Link to="/register"> <li className='text-[20px] font-bold text-purple-500 cursor-pointer'>Register</li></Link>
                                <Link to="/login"> <li className='text-[20px] font-bold text-purple-500 cursor-pointer'>Login</li></Link>
                            </ul>

                        </div>




                        
                        <div className="row-span-2">
                            <h1 className='text-[45px] font-bold pt-[34px] ont-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'>Get food delivery and more</h1>
                             <div className='flex gap-6 justify-normal items-center'>
                                <input className='h-[16px] border border-purple-400 py-[20px] pl-8 pr-[150px] rounded-full' type="text"  placeholder='Enter street or zip code'/>
                                <button className='bg-purple-600 text-[16px] font-bold px-8 py-[12px] rounded-full text-white'>
                                    Search Nearby
                                </button>
                             </div>
                        </div>
                    </div>
                </div>


                <div className='grid'>
                    <div className='py-8'>
                        &nbsp;
                    </div>

                   <div className='grid grid-cols-3 py-2 px-8 justify-between '>
                       <div className='flex flex-col justify-center items-center py-4'>
                            <img width="95px" src={Home} alt="home_svg" />
                            <h1 className='text-[20px] font-bold text-gray-900'>Local favorites</h1>
                            <p className='text-center'>Satisfy any craving with delivery from popular neighborhood restaurants and chains. Reorder go-tos or find something new.</p>
                       </div>
                      

                       <div className='flex flex-col justify-center items-center p-4'>
                            <img width="95px" src={Coin} alt="home_svg" />
                            <h1 className='text-[20px] font-bold text-gray-900 text-center '>Support local restaurants impacted by the pandemic</h1>
                            <p className='text-center'>Donate your change at checkout to the Restaurant Strong Fund to support local restaurants that have been impacted by the pandemic.</p>
                       </div>

                       <div className='flex flex-col justify-center items-center p-4'>
                           <img width="95px" src={Diamond} alt="home_svg" />
                            <h1 className='text-[20px] font-bold text-gray-900'>Exclusive Perks</h1>
                            <p className='text-center'>Discover more deals and restaurant rewards near you. Cash in on Perks and get $100s in savings. There is a huge market Captilization</p>
                       </div>

                   </div>
                   
                   <div className='py-8'>
                        &nbsp;
                    </div>


                </div>


              
                    <div className='px-12 grid grid-cols-2 py-6'>
                        <div className='px-6 flex justify-center items-center'>
                            <h1 className='text-2xl font-bold'>Restaurant Owners: Sign up with Grubhub to tap into millions of hungry customers</h1>
                        </div>
                        <div>
                            <p className='text-[15px] font-normal'>Get more delivery and pickup orders from 31.5 million Grubhub customers hungry for new local restaurants. Sign up with Grubhub for Restaurants to access hassle-free technology and marketing tools that will help you grow your business. It's easy to get started and your first 30 days are free!</p>
                        </div>
                    </div>

            </div>
        </>
    )
}

export default LandingPage
