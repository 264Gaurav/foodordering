import GHFlag from "../asset/ghflag.svg";
const Offers=()=>{
    return(
        <>
            <div className='flex justify-center gap-2 py-4 border-[1px] border-gray-300 rounded-lg shadow-md'>
                 <img src={GHFlag} alt="gh_flag" height={"30px"}/>
                 <span className='text-[15px] font-semibold'>Unlock $0 Delivery fees</span>
            </div>
        </>
    )  
}
export default Offers;