import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';


import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash, FaGithub, FaFacebook, FaGooglePlus} from "react-icons/fa";
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
import { AuthContext } from './Authprovider/Authprovider';
import axios from 'axios';



const Logins = () => {

    const [showPass, setShowPass]= useState(false);
    const [error, setError] = useState();
    const location = useLocation()
    const naviget = useNavigate()


    const {singIn, signInWithGoogle, handleGithubeSign, loadding} = useContext(AuthContext);


    // if(loadding){
    //     return (
    //         <div className='flex justify-center mt-80 min-h-screen'>
    //         <Box sx={{ display: 'flex' }}>
    //       <CircularProgress />
    //     </Box>
    //     </div>
    //       );
    // }

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        setError([])

        singIn(email, password)
        .then((result)=>{
            const loggedInUser = result.user
            console.log(loggedInUser);

            const user = {email};

            

            axios.post('https://assignment-11-server-theta-sable.vercel.app/jwt', user, {withCredentials: true})
            .then(res =>{
                console.log(res.data);
                if(res.data.success){
                naviget(location?.state ? location.state : '/')
                }
            })


            e.target.reset()
        })
        .catch((error)=>{
            console.log(error);
        })
       
      };
    
      const handleGoogleSign= ()=>{
        signInWithGoogle()
        .then(result =>{
            const loggedInUser = result.user
            console.log(loggedInUser);

            const user = { email: loggedInUser.email };

            // naviget('/')
            // naviget(location?.state ? location.state : '/')

            axios.post('https://assignment-11-server-theta-sable.vercel.app/jwt', user, {withCredentials: true})
            .then(res =>{
                console.log(res.data);
                if(res.data.success){
                    naviget(location?.state ? location.state : '/')
                    }
            })
            .catch(error=>{
                console.log("Error in JWT request:", error);
            })
        })
        .catch(error=>{
            console.log( error);
        })
      }

      const handleGiteSign=()=>{
        handleGithubeSign()
        .then(result =>{
            console.log(result.user);
            naviget(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error);
        })
      }



    return (
        <div className='min-h-screen '>

            <div>

        <div className='bg-gray-950 w-80 mx-auto mt-28 rounded-b'>
            <div className='flex text-center login bg-[#161616a8] mb-6'>
                <NavLink to="/login" className=' flex-1 p-2 px-4 text-white '>Login</NavLink>
                <NavLink to="/register" className='register flex-1 p-2 px-4 text-white '>Register</NavLink>
            </div>
        <form onSubmit={handleSignIn} className='p-6 text-left space-y-2'>
      <label className='flex items-center'>
      <MdOutlineMailOutline  className='font-bold absolute text-white' />   <input className='w-full pl-6 py-2 text-white border-b-2 border-gray-700 outline-none bg-gray-950'  type="text" name="email" placeholder='Email' id="" />
      </label>
      <label className='flex items-center '>
      <RiLockPasswordLine className='font-bold absolute text-white' />   <input className='w-full pl-6 py-2 border-b-2 text-white border-gray-700 outline-none bg-gray-950'  type={showPass ? "text" : "password"} name="password" placeholder='Password' id="" />
      <span className='-ml-4' onClick={()=>setShowPass(!showPass)}>
      {
        showPass? <FaEye className='text-white'/>:<FaEyeSlash  className='text-white'/>
      }
       </span>
      </label>
    <label>
        <input className='mt-4' type="checkbox" name="" id="" /> <span className='text-gray-400'>Remember me</span>
    </label>
    <label>
       <p className='text-gray-400 mt-6'><a href="">Lost Your password?</a></p>
    </label>
    <label className=''>
        <input className=' cursor-pointer border border-gray-600 rounded text-white w-full p-2 my-4 font-bold' type="submit" value='login' name="" id="" />
    </label>

    <div className='flex gap-4 text-white'>
        <button className='' onClick={handleGoogleSign}><FaGooglePlus className='text-2xl' /></button>
        <button onClick={handleGiteSign}><FaGithub className='text-2xl' /></button>
    </div>
        </form>
        <p className="text-center mb-2 text-red-500 font-bold">{error}</p>

        </div>

            </div>
            
        </div>
    );
};

export default Logins;