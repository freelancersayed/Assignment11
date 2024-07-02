import React, { useContext } from 'react';
import { AuthContext } from './Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import Skeleton from './Sheard/Skeleton';
import { render } from 'react-dom';
import { Audio, DNA, RotatingLines } from 'react-loader-spinner';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';



const PrivetRout = ({children}) => {
    const {user, loadding} = useContext(AuthContext);
    const location = useLocation();

    if(loadding){
        return   <div className='min-h-screen flex items-center justify-center'>
            <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
        </div>
    }
    
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRout;