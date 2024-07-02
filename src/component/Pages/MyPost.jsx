import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const MyPost = () => {

    const {user} = useContext(AuthContext)

    const [post, setPost] = useState([]);

    // useEffect(()=>{
    //     fetch(`https://assignment-11-server-theta-sable.vercel.app/mypost/${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //       setPost(data)
  
       
    //     })
    //   },[])

    useEffect(()=>{
      fetch(`https://assignment-11-server-theta-sable.vercel.app/mypost?email=${user?.email}`, {credentials: 'include'})
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPost(data)

     
      })
    },[])

    console.log(post);

      console.log(post);
console.log(user.email);

    return (
        <div className='max-w-[1280px] mx-auto min-h-screen'>
            {
              post.map(item=><div key={item._id}>
              
               <div className='flex my-2 shadow-md p-5 px-8 border gap-10 rounded'>
               <div className='flex-1'>

                  <PhotoProvider>
                  <PhotoView src={item.authorImage}>
                  <img className='w-8 h-8 rounded-full order absolute -ml-8 -mt-5' src={item.authorImage} alt="" />
                  </PhotoView>
                </PhotoProvider>

               <div className='flex justify-between'>
               <h1 className=' font-bold text-xl text-left'>Title : {item.title}</h1> 
                <span><Link to={`/update/${item._id}`} className='text-xl text-blue-500 '> {item.email? <><p className='font-sm hover:text-red-500'>update </p></> : null}</Link></span>
               </div>
                <hr className='my-2' />
                <p><span className='font-bold'>Sort Descreption : </span>{item.shortDes}</p>
                <p className='my-2'><span className='font-bold'>Category:</span> {item.category}</p>
                <p><span className='font-bold'>Date:</span> {item.time}</p>
                <div className='mt-5'><Link className='' to={`/details/${item._id}`}> <button className="w-full bg-green-400 px-2 rounded text-white" >View Details</button></Link>
              </div>
               </div>
               
                <div className=' '>
                  {/* <img className='w-96 h-full ' src={item.photo} alt="" /> */}
                  <PhotoProvider>
                  <PhotoView src={item.photo}>
                     <img className='w-96 h-44 rounded' src={item.photo} alt="" />
                  </PhotoView>
                </PhotoProvider>
                </div>
               </div>

              </div>)
            }
        </div>
    );
};

export default MyPost;