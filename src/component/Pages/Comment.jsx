import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authprovider/Authprovider';

const Comment = ({item}) => {
    const [delet, setDelet]= useState(null)
    const {user} = useContext(AuthContext)

console.log(user.email);
    const handleDelete = _id =>{
        if(item?.author !== user.email){
          setDelet("🚫 Cannot be deleted!")
          return toast.error('Cannot be deleted!')
        } 
        setDelet([])
        console.log();
      
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://assignment-11-server-theta-sable.vercel.app/comment/${_id}`,{
              method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
              console.log(data);
              if(data.deletedCount > 0){
                // naviget('/myList/')
                // naviget(location?.state ? location.state : '/details')
                Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
              }
            })
          }
        });
      }

    return (
        <div>
            
            <div >
               <div className="flex items-center gap-6  px-2 py-1 mt-2">
               <div className="mt-">
                  <img className="rounded-full w-12" src={item.photo} alt="" />
                  </div>
              <div className="bg-gray-200 py-2 px-4 rounded-2xl shadow flex gap-4 items-center">
              <div >
            
            <h1 className="text-sm underline">{user.displayName}</h1>
             <p>{item.comment} </p>
             
            </div>
            <div className="-mr-3 flex flex-col gap-5 ml-5">
             <FaEdit  className="-mt-3 text-sm text-blue-600"/>
             <MdDelete onClick={()=>handleDelete(item._id)} className="-mb-5 text-sm text-red-500 cursor-pointer"/>
            </div>
              </div>
              <p className="text-red-500 px-10 py-2">{delet}</p>
               </div>
              
              </div>
        </div>
    );
};

export default Comment;