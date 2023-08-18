import React, { useState} from "react";
import "./Register.css";


import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

  const navigate = useNavigate();

 
//   useEffect(() => {
//     if(localStorage.getItem("user-logged-in")){
//       navigate("/chat");
//     }
//  },[]);
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });


  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    // validation is not working, have to work on it


    if(handleValidation()){
      
      e.preventDefault();
      const { name, email, phone, password } = values;
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password
        }),
      });

      const data =await res.json();
      if (res.status === 400) {
        toast.error(data.Message,{theme:"dark"});
      } 
      else 
      {
        localStorage.setItem("user-logged-in",JSON.stringify(data.user));
        navigate("/body");
      }

    }
};


  const handleValidation=()=>{
     const { name, email, phone, password } = values;
     if(name.length<=3){
        toast.error("Name Length is less than 4");
        return false;
    }
   else if(!email)
   {
        toast.error("Please Enter the email");
        return false;
   }
   else if(!phone)
   {
     toast.error("Please Enter the Mobile number");
     return false;
   }
    else if(password.length<=5)
    {
        toast.error("Password is too short");
        return false;
    }
    else
    return true;
  }
  
  

  return (
    <>
      <div className="register_container">
        <div className="form_container">
          
          
          {/* <Navbar /> */}

          <form onSubmit={(e) => handleSubmit(e)} className="from">
            <p>START FOR FREE</p>
            <h2>Create new account</h2>
            <span>
              Already A Member ? <Link to="/login" className="text-white font-bold">Login</Link>
            </span>

            {/* <div className="details"> */}

            <div className="name">
              <input
                type="text"
                placeholder="Enter User Name"
                name="name"
                onChange={(e) => handleChange(e)}
              />

              <input
                type="email"
                placeholder="Enter User Email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <input
              type="number"
              placeholder="Enter User Mobile"
              name="phone"
              onChange={(e) => handleChange(e)}
            />

            <input
              type="password"
              placeholder="Enter User Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />

            <div className="btn_container">
              <button
                onSubmit={(e) => handleSubmit(e)}
                className="button create_acc"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;