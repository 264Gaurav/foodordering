import React,{useState} from 'react'

const SectionCard=({description,heading,isVisible,setVisibility})=>{

    const [init,setInit]=useState(false);
  
   return(
    <>
      <div className='border-2 border-gray-600 px-8 py-4'>
      {
      
      isVisible ?  
        <button 
           className='px-3 py-1 text-white font-bold bg-purple-600 rounded ' 
           onClick={()=>{setVisibility(false)}}>
              Hide
        </button> 
          
          : 
          
        <button 
           className='px-3 py-1 text-white font-bold bg-purple-600 rounded '
             onClick={()=>{setVisibility(true)}}>
            Show
        </button>
        
        }



        <h1 className='text-gray-100 font-bold bg-gray-800 w-20 rounded my-4 flex justify-center'>{heading}</h1>
        {isVisible && <p>{description}</p>}
      </div>
    </>
   )
}

const Instamart = () => {

    const [sectionVisibility,setSectionVisibility]=useState({
        about:true,
        contact:false,
        carrier:false
    });

  return (
    <div className='flex p-4'>
       <div className='flex flex-col   w-full px-8 py-4'>
  
             <div className='flex justify-center items-center bg-gray-200 my-4 rounded'>
                <h1 className='flex justify-center text-[30px] font-bold text-purple-500'>I have Implemented Lazy Loading over here</h1>
             </div>

            <SectionCard setVisibility={()=>{setSectionVisibility({
             about:true,
             contact:false,
             carrier:false
            })}} isVisible={sectionVisibility.about} heading={"about"} description={"Lazy loading in React is a technique used to improve the performance of your application by loading components only when they are needed, instead of loading all components upfront. This is particularly beneficial for large applications with many components, as it helps reduce the initial load time and optimizes the usage of network resources."}/>
            <SectionCard setVisibility={()=>{setSectionVisibility({
             about:false,
             contact:true,
             carrier:false
            })}} isVisible={sectionVisibility.contact} heading={"contact"} description={"Lazy loading in React is a technique used to improve the performance of your application by loading components only when they are needed, instead of loading all components upfront. This is particularly beneficial for large applications with many components, as it helps reduce the initial load time and optimizes the usage of network resources."}/>
            <SectionCard setVisibility={()=>{setSectionVisibility({
             about:false,
             contact:false,
             carrier:true
            })}} isVisible={sectionVisibility.carrier} heading={"carrier"} description={"Lazy loading in React is a technique used to improve the performance of your application by loading components only when they are needed, instead of loading all components upfront. This is particularly beneficial for large applications with many components, as it helps reduce the initial load time and optimizes the usage of network resources."}/>
       </div>
    </div>
  )
}

export default Instamart
