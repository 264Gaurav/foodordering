import React from 'react'

const ShimmerCard=()=>{
    return(
        <>
          <div className='px-14 pb-12'>
              <div className='flex justify-between'>
                 <div className='px-12 h-[30px] w-[50%] bg-gray-300 rounded-sm'> </div>
                 <div className='flex gap-3'>
                    <div className='px-12 h-[30px] w-[30px] bg-gray-300 rounded-sm'> </div>
                    <div className='px-12 h-[30px] w-[30px] bg-gray-300 rounded-sm'> </div>
                    <div className='px-12 h-[30px] w-[30px] bg-gray-300 rounded-sm'> </div>
                    <div className='px-12 h-[30px] w-[30px] bg-gray-300 rounded-sm'> </div>
                 </div>
              </div>
              
              <div className='grid grid-cols-4 pt-4 gap-4'>
                  <div className='flex flex-col gap-4'>
                     <div className='w-full bg-gray-300 h-[150px]'></div>
                     <div className='px-4 flex flex-col gap-4'>
                       <div className='w-[70%] bg-gray-300 h-[16px]'></div>
                       <div className='w-[40%] bg-gray-300 h-[16px]'></div>
                     </div>
                     <div className='w-[80%] bg-gray-300 h-[15px]'></div>
                  </div>

                  <div className='flex flex-col gap-4'>
                     <div className='w-full bg-gray-300 h-[150px]'></div>
                     <div className='px-4 flex flex-col gap-4'>
                       <div className='w-[70%] bg-gray-300 h-[16px]'></div>
                       <div className='w-[40%] bg-gray-300 h-[16px]'></div>
                     </div>
                     <div className='w-[80%] bg-gray-300 h-[15px]'></div>
                  </div>

                  <div className='flex flex-col gap-4'>
                     <div className='w-full bg-gray-300 h-[150px]'></div>
                     <div className='px-4 flex flex-col gap-4'>
                       <div className='w-[70%] bg-gray-300 h-[16px]'></div>
                       <div className='w-[40%] bg-gray-300 h-[16px]'></div>
                     </div>
                     <div className='w-[80%] bg-gray-300 h-[15px]'></div>
                  </div>

                  <div className='flex flex-col gap-4'>
                     <div className='w-full bg-gray-300 h-[150px]'></div>
                     <div className='px-4 flex flex-col gap-4'>
                       <div className='w-[70%] bg-gray-300 h-[16px]'></div>
                       <div className='w-[40%] bg-gray-300 h-[16px]'></div>
                     </div>
                     <div className='w-[80%] bg-gray-300 h-[15px]'></div>
                  </div>

                  
              </div>
            </div>
        </>
    )
}

const Shimmer = () => {
    const emptyArray = Array.from({ length: 10 });

  return (
    <div>
         <div className='px-14 pb-8'><div className='px-12 h-[60px] bg-gray-300 rounded-sm'> </div></div>
         {emptyArray.map((val,index)=>{
            return(
                <div key={index}>
                  <ShimmerCard />
                </div>
            )
         })}
    </div>
  )
}

export default Shimmer;
