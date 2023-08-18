import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from "../constants";
import { SiGithub, SiLinkedin, SiGoogle } from "react-icons/si";
import {Link} from "react-router-dom"

const EmptyCart = () => {
  return (
    <div className="flex-1 flex justify-center items-center font-poppins bg-slate-50">
      <div className="flex flex-col justify-center items-center mt-4 gap-5 shadow-lg border w-fit max-w-xs my-4">
        <p className="font-medium text-xl w-full text-center py-2 px-4 bg-red-500 rounded text-white">Cart Is Empty</p>
        <Link to="/body"><p className="font-medium text-xl w-full text-center py-2 px-4 bg-blue-500 rounded text-white">Continue Shopping</p> </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
