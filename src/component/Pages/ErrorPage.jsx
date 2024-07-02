import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen items-center flex justify-center'>
        <Helmet>
      <title>All Sport| Error</title>
      </Helmet>
      <div className="text-center -mt-40 ">
   <h1 className="text-[300px] font-bold">404</h1>

     <p className="text-2xl text-white mt-2">Oops! That page can't be found. </p>
     <NavLink to="/"> <button className=" text-blue-500 underline mt-10">Go Home</button></NavLink>
   </div>
 </div>
    );
};

export default ErrorPage;