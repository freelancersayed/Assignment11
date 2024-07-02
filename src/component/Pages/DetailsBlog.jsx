import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import toast, { Toaster } from "react-hot-toast";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaAngleDoubleLeft, FaEdit, FaRemoveFormat } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Toast } from "@chakra-ui/react";
import Comment from "./Comment";

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DetailsBlog = () => {

  const [comment, setComment]= useState([])
  const [error, setError]= useState(null)
  const [delet, setDelet]= useState(null)
  const [list, setDate] = useState([])



    const {user} = useContext(AuthContext)
  const details = useLoaderData([]);

  const { _id } = useParams();
  const item = details.find((detail) => detail._id === _id);

  // setList(item.time)

  const date = item.time
  console.log(date);

  // const formate = date.toLocaleDateString()
  //   console.log(formate);


  console.log(item.author);
  const location = useLocation()
  const naviget = useNavigate()

  




    const handleComment =async e=>{
      e.preventDefault();
      if(user.email === item.author){
        console.log('no comment');
        
        setError('Sorry you cant comment on it..!')
        return toast.error('You cannot comment!')
      }
  
        const form = e.target;
        const comment = form.comment.value;
        const photo = user.photoURL
        const id = item._id
        const name = user.displayName
        const author= user.email
        console.log(comment, photo, id, );
        const newComment = {name, comment, photo, id, author}

        fetch('https://assignment-11-server-theta-sable.vercel.app/comment',{
          method: 'POST',
          headers:
              {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(newComment)
      })
      .then(res => res.json())
      .then(data=>{console.log(data)})
   
      return form.reset()
      return <Navigate state={location.pathname} to="/details"></Navigate>
    }

console.log(user.email);
console.log(comment?.commentEmail);
// Delete===========================================
// const handleDelete = _id =>{
//   if(comment?.commentEmail != user.email){
//     setDelet("Cannot be deleted!")
//     return toast.error('Cannot be deleted!')
//   } 
//   setDelet([])
//   console.log();

//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       fetch(`https://assignment-11-server-theta-sable.vercel.app/comment/${_id}`,{
//         method: 'DELETE'
//       })
//       .then(res=>res.json())
//       .then(data =>{
//         console.log(data);
//         if(data.deletedCount > 0){
//           // naviget('/myList/')
//           // naviget(location?.state ? location.state : '/details')
//           Swal.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success"
//       });
//         }
//       })
//     }
//   });
// }






    useEffect(()=>{
      fetch(`https://assignment-11-server-theta-sable.vercel.app/comment?id=${item._id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setComment(data)

     
      })
    },[])

    console.log('item id check', item._id);
   







  return (
    <div className="max-w-[1280px] mx-auto mb-5">
       {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
      <div className="p-4 shadow-md text-justify ">
        <div className="flex gap-5">
          <div className="p-2 h-full w-full  ">
            <PhotoProvider>
              <PhotoView src={item.photo}>
                 <img className="w-full h-full ab " src={item.photo} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>
     <div className="p-2">
     <h1 className=" font-bold text-3xl text-left">{item.title}</h1>
          <hr className="my-2" />
          <p>{item.shortDes}</p>
          <p className="my-2">{item.category}</p>
          <p>{item.time}</p>
          <p>{item.longDes}</p>
     </div>
        </div>
      </div>
       {/* feedback section============== */}
      <div>
        <h1></h1>
      </div>


    <div className=" shadow-md p-4">
    <div className="my-5">
           <form onSubmit={handleComment}>
            
         <div className="flex border border-green-400 rounded-2xl h-12">
         <textarea name="comment" className="w-full outline-none border-none rounded-l-2xl text- " placeholder="Write a new comment here..."></textarea>
           <input className=" cursor-pointer bg-green-400 px-4 text-white font-bold text-xl rounded-r-2xl" type="submit" value="Submit" name="" id="" />
         </div>
         <p className="text-red-400 font-bold ">{error}</p>
           </form>
        </div>

        <div className="">
          <div className="bg-gray-100">
            {/* <p className="text-red-500 px-10 py-2">{delet}</p> */}
          </div>
            {
              comment.map(item=><Comment key={item._id} item={item}></Comment>)
            }
            
        </div>
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
    </div>
  );
};

export default DetailsBlog;
