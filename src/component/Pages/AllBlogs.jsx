import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import toast, { Toaster } from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaEdit } from "react-icons/fa";
import { Stack } from "@mui/joy";
import Skeleton from "react-loading-skeleton";





const AllBlogs = () => {
  const {user, loadding} = useContext(AuthContext)
  const sportData = useLoaderData([]);
  const [items, setItems] = useState(sportData);

  // console.log(sportData);
  // const [item, setItem]=useState([]);
  // const [wish, setWish]=useState([]);



  if(loadding){
    return    <div className='flex justify-center pt-2 min-h-screen '>
  <Stack spacing={1}>
<div className="grid grid-cols-4 gap-4 ">
<div className=""> <Skeleton variant="rectangular" width={300} height={180} /></div>
<div className=""> <Skeleton variant="rectangular" width={300} height={180} /></div>
<div className=""> <Skeleton variant="rectangular" width={300} height={180} /></div>
<div className=""> <Skeleton variant="rectangular" width={300} height={180} /></div>

<div className=""> <Skeleton variant="rectangular" width={300} height={20} /></div>
<div className=""> <Skeleton variant="rectangular" width={300} height={20} /></div>
<div className=""> <Skeleton variant="rectangular" width={300} height={20} /></div>
<div className=""> <Skeleton variant="rectangular" width={300} height={20} /></div>

<div className=""> <Skeleton variant="rectangular" width={300} height={10} /></div>
<div className=""> <Skeleton variant="rectangular" width={300} height={10} /></div>
<div className=""> <Skeleton variant="rectangular" width={300} height={10} /></div>
<div className=""> <Skeleton variant="rectangular" width={300} height={10} /></div>

<div className="flex gap-4">
<div className="flex-1"> <Skeleton variant="rectangular" width={140} height={20} /></div>
<div className=""> <Skeleton variant="rectangular" width={140} height={20} /></div>
</div>
<div className="flex gap-4">
<div className="flex-1"> <Skeleton variant="rectangular" width={140} height={20} /></div>
<div className=""> <Skeleton variant="rectangular" width={140} height={20} /></div>
</div>
<div className="flex gap-4">
<div className="flex-1"> <Skeleton variant="rectangular" width={140} height={20} /></div>
<div className=""> <Skeleton variant="rectangular" width={140} height={20} /></div>
</div>
<div className="flex gap-4">
<div className="flex-1"> <Skeleton variant="rectangular" width={140} height={20} /></div>
<div className=""> <Skeleton variant="rectangular" width={140} height={20} /></div>
</div>


</div>
  
  </Stack>
    </div>
  }


  // Category function =================
  const handleAll = () => {
    setItems(sportData);
  };
  const handleCategory = (name) => {
    const filteredData = sportData.filter(
      (item) => item.category === name
    );
    setItems(filteredData);
    console.log(filteredData);
  };




  const handleWishlist= item =>{
    console.log( 'item', item.email);
    const email = user.email
    const wish = {item, email}
console.log(wish);
    fetch('https://assignment-11-server-theta-sable.vercel.app/wish',{
      method: 'POST',
      headers:
          {
              'content-type': 'application/json'
          },
          body: JSON.stringify(wish)
  })
  .then(res => res.json())
  .then(data=>{console.log(data)

    if(data.acknowledged){
      toast.success('Add Wishlist Successfully!')
    }
  })

  }





  return (
    <div className="max-w-[1280px] mx-auto mb-5">
{/* cetegory start ====================== */}
      <div className="h-10 w-full border m-2">

      <div className="drawer ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle " />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="drawer-button border my-4">Selected Category</label>
  </div> 
  <div className="drawer-side absolute ">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay bg-none "></label>
    <ul className="menu p-4 w-80 min-h- mt-12 bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li  onClick={handleAll}><a>All</a></li>
      <li  onClick={() => handleCategory("Football")}><a>Football</a></li>
      <li  onClick={() => handleCategory("Cricket")}><a>Cricket</a></li>
      <li  onClick={() => handleCategory("Hokey")}><a>Hokey</a></li>
      <li  onClick={() => handleCategory("Basket")}><a>Basketball</a></li>
      <li  onClick={() => handleCategory("Swimming")}><a>Swimming</a></li>
      <li  onClick={() => handleCategory("Badminton")}><a>Badminton</a></li>
      <li  onClick={() => handleCategory("Kabadi")}><a>Kabadi</a></li>
      
    </ul>
  </div>
</div>

      </div>

      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item._id}>
         <div className='p-4 shadow-2xl h-96 text-justify justify-end flex flex-col'>
              <div className="flex-1 ">
           <div>
           </div>
                <PhotoProvider>
                  <PhotoView src={item.photo}>
                     <img className='w-full h-36' src={item.photo} alt="" />
                  </PhotoView>
                </PhotoProvider>
             
                <h1 className=' font-bold text-xl text-left'>{item.title}</h1>
                <hr className='my-2' />
                <p>{item.shortDes}</p>
                <p className='my-2'>Category: {item.category}</p>
                <p>{item.time}</p>
              </div>

            <div className="flex justify-between">
             
         <span><Link to={`/update/${item._id}`} className='text-xl text-blue-500 '> {item.email? <FaEdit /> : null}</Link></span>

 <div className="flex gap-2">
 <Link to={`/details/${item._id}`}> <button className="w-full bg-green-400 px-2 rounded text-white" >Details</button></Link>
            <Link > <button onClick={()=>handleWishlist(item)} className="w-full bg-blue-400 px-2 rounded text-white" >Wishlist</button></Link>
 </div>
            </div>
               
            </div>
          </div>
        ))}
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
};

export default AllBlogs;
