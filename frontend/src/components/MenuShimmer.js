import React from 'react'

const Shimmer = () => {
  return (
    <div className='px-32'>
    <div className=' flex justify-between py-4 border-b-2 border-gray-500'>

      <div className='flex flex-col gap-2 w-[30%]'>
         <div className='h-8 bg-gray-300 rounded'></div>
         <div className='h-6 bg-gray-300 rounded'></div>
         <div className='h-4 bg-gray-300 rounded'></div>
      </div>

      <div>
        <div className="h-24 w-44 bg-gray-300 rounded"></div>
      </div>

    </div>
    </div>
  )
}

const MenuShimmer=()=>{

   const emptyArray=Array.from({length:30});
    return(
      <>
       {
          emptyArray.map((item,index)=>{
            return(
              <div  key={index}>
                <Shimmer/>
              </div>
            )
          }) 
       }
      </>
    )
}

export default MenuShimmer
