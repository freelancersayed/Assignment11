import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import { MdDelete } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';
import Swal from 'sweetalert2';
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Stack } from '@mui/joy';
import Skeleton from 'react-loading-skeleton';

const Wishlist = () => {
    const [wish, setWish]= useState([])
    const {user, loadding} = useContext(AuthContext)
    //  const wish = useLoaderData([]);

    console.log(user?.email);


const naviget = useNavigate()




    const handleDelete = _id =>{
      
    
 
          fetch(`https://assignment-11-server-theta-sable.vercel.app/wish/${_id}`,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
              naviget('/wishlist')
              // naviget(location?.state ? location.state : '/details')
              Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
          })
      
    }





    useEffect(()=>{
        fetch(`https://assignment-11-server-theta-sable.vercel.app/wish?email=${user?.email}`, {credentials: 'include'})
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setWish(data)
  
       
        })
      },[])

      console.log(wish);
     
//      const { email } = useParams();
//   const item = wish.find((detail) => detail.email === email);
//   console.log(item);

    return (
        <div className='max-w-[1280px] mx-auto min-h-screen'>
       <div>
       {
                wish?.map(data=><div key={data._id}>
                <div className='flex gap-6 my-4 shadow'>
                <div>
                    <img className='w-52 h-full' src={data.item.photo} alt="" />
                  </div>
                  <div className='flex-1'>
                    <h1>{data.item.title}</h1>
                    
                    <p>Category : {data.item.category}</p>
                    <div>
                      <p>{data.item.shortDes}</p>
                    </div>
                    <div className='mt-6 mb- justify-end '>
                    <Link to={`/details/${data.item._id}`}> <button className=" bg-green-400 px-2 rounded text-white hover:bg-green-500" >View Details</button></Link>
                    </div>
                  </div>
                  <div className='pr-1'>
                    <TiDeleteOutline onClick={()=>handleDelete(data._id)} className=' hover:text-red-600 hover:text-3xl text-2xl cursor-pointer'/>
                  </div>
                </div>
  
                </div>) 
            }
       </div>
        </div>
    );
};

export default Wishlist;