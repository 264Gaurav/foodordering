import React,{useContext} from 'react'
import UserContext from '../utils/userContext';


const Footer = () => {


    return (
        <>
            <footer>

             

                <div className='p-8 bg-slate-200'>
                    <div className='grid grid-cols-2 px-8'>
                        <div className='flex items-center'>
                            <h1 className='text-[25px] font-bold'>About Grubhub</h1>
                        </div>
                        <div className='flex items-center'>
                            <p className='leading-[22px] text-sm'>Grubhub helps you find and order food from wherever you are. How it works: you type in an address, we tell you the restaurants that deliver to that locale as well as showing you droves of pickup restaurants near you. Want to be more specific? Search by cuisine, restaurant name or menu item. We'll filter your results accordingly. When you find what you're looking for, you can place your order online or by phone, free of charge. Oh, and we also give you access to reviews, coupons, special deals and a 24/7 customer care team that tracks each order and makes sure you get exactly what you want.</p>
                        </div>
                    </div>
                </div>


                <div className='bg-slate-700'>
                    <div className='px-4 py-8'>
                        <div className='px-[90px] grid grid-cols-4 gap-4'>


                            {/* division sart from here */}



                            {/* part 1 */}
                            <div className='text-white px-2 flex flex-col gap-4'>
                                <div>
                                    <h1 className='font-bold text-lg text-[16px]'>Sign up for special offers</h1>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <h1 className='font-bold'>
                                        Email address
                                    </h1>
                                    <input className='px-2 py-2 rounded border-2 bg-slate-500' type="text" placeholder='your@gmailcom' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-bold'>
                                        ZIP Code
                                    </h1>
                                    <input className='px-2 py-2 rounded border-2 bg-slate-500' type="text" placeholder='1111' />
                                </div>

                                <div className=''>
                                    <button className='text-black font-semibold py-3 bg-white rounded w-[100%]'>Count me in!</button>
                                </div>
                            </div>



                            {/* part 2*/}


                            <div className='text-white px-2 flex flex-col gap-4'>
                                <div>
                                    <h1 className='font-bold text-lg text-[16px]'>
                                        Get to know us
                                    </h1>
                                </div>
                                <div>
                                    <ul className='flex flex-col gap-2 text-[14px] cursor-pointer'>
                                        <li className='hover:underline'>About Grubhub</li>
                                        <li className='hover:underline'>About Grubhub</li>
                                        <li className='hover:underline'>Our blog</li>
                                        <li className='hover:underline'>Our tech blog, Grubhub Bytes</li>
                                        <li className='hover:underline'>Carrier</li>
                                        <li className='hover:underline'>Investor relations</li>
                                        <li className='hover:underline'>News</li>
                                    </ul>
                                </div>
                            </div>




                            {/* part 3 */}


                            <div className='text-white px-2 flex flex-col gap-4'>
                                <div>
                                    <h1 className='font-bold  text-lg text-[16px]'>
                                        Useful links
                                    </h1>
                                </div>
                                <div>
                                    <ul className='flex flex-col gap-[3px] text-[15px] cursor-pointer'>
                                        <li className='hover:underline'> Gift cards</li>
                                        <li className='hover:underline'> Grubhub+</li>
                                        <li className='hover:underline'> Grubhub Guarantee</li>
                                        <li className='hover:underline'> Grubhub Perks</li>
                                        <li className='hover:underline'> Help</li>
                                        <li className='hover:underline'> Catering</li>
                                        <li className='hover:underline'> Student discounts</li>
                                        <li className='hover:underline'> Keyboard Shortcuts</li>
                                        <li className='hover:underline'> Answers</li>
                                        <li className='hover:underline'> Grubhub Rewards</li>
                                        <li className='hover:underline'> Amazon Prime Deal</li>
                                        <li className='hover:underline'> Bank of America</li>
                                    </ul>
                                </div>

                                <div>
                                    <h1 className='font-bold  text-lg text-[16px]'>
                                        Connect with us
                                    </h1>
                                </div>

                                <div>
                                    <ul className='flex flex-col gap-[3px] text-[15px] cursor-pointer'>
                                        <li className='hover:underline'> Facebook</li>
                                        <li className='hover:underline'>Twitter</li>
                                        <li className='hover:underline'>Instagram</li>
                                        <li className='hover:underline'>YouTube</li>
                                    </ul>
                                </div>

                            </div>


                            {/* part 4 */}

                            <div className='text-white px-2 flex flex-col gap-4'>
                                <div>
                                    <h1 className='font-bold  text-lg text-[16px]'>Partner with us</h1>
                                </div>
                                <div className='border border-gray-200 rounded-full p-3 flex justify-center font-semibold'>
                                    <button>For restaurants</button>
                                    <span>&gt;</span>
                                </div>
                                <div className='border border-gray-200 rounded-full p-3 flex justify-center font-semibold'>
                                    <button>For drivers</button>
                                    <span>&gt;</span>
                                </div>
                                <div className='border border-gray-200 rounded-full p-3 flex justify-center font-semibold'>
                                    <button>For corporate accounts</button>
                                    <span>&gt;</span>
                                </div>
                                <div className='border border-gray-200 rounded-full p-3 flex justify-center font-semibold'>
                                    <button>Become an affiliate</button>
                                    <span>&gt;</span>
                                </div>
                                <div className='border border-gray-200 rounded-full p-3 flex justify-center font-semibold'>
                                    <button >For campuses & hotels</button>
                                    <span className=''>&gt;</span>
                                </div>
                            </div>



                        </div>


                        <div className='px-8 py-8'>
                            <div className='h-[1px] bg-gray-300'></div>
                        </div>



                        {/* send section of the footer  */}

                        <div className='px-4'>
                            <div className='grid grid-cols-4 text-white text-sm leading-7 px-[85px]'>
                                <div className=''>
                                    <ul>
                                        <li>Browse by cuisines</li>
                                        <li>Alcohol delivery</li>
                                        <li>American Food delivery</li>
                                        <li>Asian Food delivery</li>
                                        <li>Breakfast delivery</li>
                                        <li>Chicken delivery</li>
                                        <li>Chinese Food delivery</li>
                                        <li>Dessert delivery</li>
                                        <li>Dinner delivery</li>
                                        <li>Gluten-free delivery</li>
                                        <li>Healthy Food delivery</li>
                                        <li>Ice Cream delivery</li>
                                        <li>Indian Food delivery</li>
                                        <li>Italian Food delivery</li>
                                        <li>Japanese delivery</li>
                                        <li>Late Night delivery</li>
                                        <li>Lunch delivery</li>
                                        <li>Mexican Food delivery</li>
                                        <li>Organic Food delivery</li>
                                        <li>Pasta delivery</li>
                                        <li>Pizza delivery</li>
                                        <li>Sandwiches delivery</li>
                                        <li>Seafood delivery</li>
                                        <li>Soup delivery</li>
                                        <li>Steak delivery</li>
                                        <li>Sushi delivery</li>
                                        <li>Thai Food delivery</li>
                                        <li>Vegetarian Food delivery</li>
                                        <li>Wings delivery</li>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <li>                                        Ann Arbor restaurants</li>
                                        <li> Austin restaurants</li>
                                        <li>Bloomington restaurants</li>
                                        <li>Boulder restaurants</li>
                                        <li>Champaign restaurants</li>
                                        <li>Columbus restaurants</li>
                                        <li>Denver restaurants</li>
                                        <li>Fort Worth restaurants</li>
                                        <li>Houston restaurants</li>
                                        <li>Las Vegas restaurants</li>
                                        <li>Madison restaurants</li>
                                        <li>Miami restaurants</li>
                                        <li>Nashville restaurants</li>
                                        <li>New York City restaurants</li>
                                        <li>Orange County restaurants</li>
                                        <li>Phoenix restaurants</li>
                                        <li>Portland restaurants</li>
                                        <li>Rochester restaurants</li>
                                        <li>San Francisco restaurants</li>
                                        <li>Scottsdale restaurants</li>
                                        <li>Syracuse restaurants</li>
                                        <li>Tempe restaurants</li>
                                        <li>Washington </li>
                                        <li>DC restaurants</li>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <li>Atlanta restaurants</li>
                                        <li>Baltimore restaurants</li>
                                        <li>Boston restaurants</li>
                                        <li>Brooklyn restaurants</li>
                                        <li>Chicago restaurants</li>
                                        <li>Dallas restaurants</li>
                                        <li>Detroit restaurants</li>
                                        <li>Hartford restaurants</li>
                                        <li>Ithaca restaurants</li>
                                        <li>Los Angeles restaurants</li>
                                        <li>Manhattan restaurants</li>
                                        <li>Milwaukee restaurants</li>
                                        <li>New Haven restaurants</li>
                                        <li>Oakland restaurants</li>
                                        <li>Philadelphia restaurants</li>
                                        <li>Pittsburgh restaurants</li>
                                        <li>Queens restaurants</li>
                                        <li>San Diego restaurants</li>
                                        <li>San Jose restaurants</li>
                                        <li>Seattle restaurants</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>Restaurant Chains Delivery</li>
                                        <li>Burger King Delivery</li>
                                        <li>Pizza Hut Delivery</li>
                                        <li>Denny's</li>
                                        <li>Church's Chicken Menu</li>
                                        <li>Papa John's Pizza</li>
                                        <li>Restaurants Near Me</li>
                                        <li>Burgers near me</li>
                                        <li>Bubble Tea near me</li>
                                        <li>Pho near me</li>
                                        <li>Milkshake near me</li>
                                        <li>Cupcakes near me</li>
                                        <li>Donuts near me</li>
                                        <li>Philly cheesesteak near me</li>
                                        <li>Nachos near me</li>
                                        <li>Funnel Cake near me</li>
                                        <li>Dumplings near me</li>
                                        <li>Fish Tacos near me</li>
                                        <li>Hibachi near me</li>
                                        <li>Calamari near me</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* end of the  footer  */}


                        <div className='px-8 py-8'>
                            <div className='h-[1px] bg-gray-300'></div>
                        </div>

                        <div className='grid grid-cols-4 text-white text-sm font-thin px-[85px]'>
                            <div><p className='underline'>© 2023 Grubhub All rights reserved.</p></div>
                            <div></div>
                            <div className='gap-6 flex flex-col'>
                                <p className='underline'>Terms of Use</p>
                                <p className='underline'>Notice of Financial Incentive</p>
                            </div>

                            <div className='gap-6 flex flex-col'>
                                <p className='underline'>Privacy Policy</p>
                                <p className='underline'>Do Not Sell My Information</p>
                            </div>
                        </div>

                        <div className='flex gap-2 px-[85px] py-8 items-center'>
                            <img className='rounded-full h-6 w-6' src="https://flagcdn.com/h120/in.png" alt="indianflag" />
                            <p className='text-lg'>India</p>
                        </div>

                    </div>
                </div>


                <div className='bg-blue-900'>
                    <p className='flex justify-center py-2 font-bold text-white'>© 2023 made by Vinod 🎉</p>
                </div>




            </footer>
        </>
    )
}

export default Footer;
