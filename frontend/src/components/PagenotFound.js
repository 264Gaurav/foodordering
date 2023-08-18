import React from 'react';
import {useRouteError} from "react-router-dom"

const PagenotFound = () => {
    const {statusText,status}=useRouteError();
    
  return (
    <div>
       <h1>{statusText}  :  {status}</h1>
    </div>
  )
}

export default PagenotFound
