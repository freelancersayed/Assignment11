import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import toast, { Toaster } from 'react-hot-toast';
import { Stack } from '@mui/joy';
import Skeleton from 'react-loading-skeleton';

const HomeCard = ({item}) => {

  const {user, loadding} = useContext(AuthContext)
// const handleDetails= (e)=>{
//     console.log(e);
// }
     

if(loadding){
  return    <div className='flex justify-center pt-2 min-h-screen '>
<Stack spacing={1}>

<div className="grid gap-4 ">
<div className=""> <Skeleton variant="rectangular"  width={300} height={180} /></div>


<div className=""> <Skeleton variant="rectangular" width={300} height={20} /></div>
<div className=""> <Skeleton variant="rectangular" width={300} height={20} /></div>


<div className=""> <Skeleton variant="rectangular" width={300} height={10} /></div>


<div className="flex gap-4">
<div className="flex-1"> <Skeleton variant="rectangular" width={140} height={20} /></div>
<div className=""> <Skeleton variant="rectangular" width={140} height={20} /></div>
</div>

</div>

</Stack>
  </div>
}



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
        <div>
        <div className='p-4 shadow-md h-96 text-justify justify-end flex flex-col'>
              <div className="flex-1">
              <PhotoProvider>
                  <PhotoView src={item.photo}>
                     <img className='w-full h-36' src={item.photo} alt="" />
                  </PhotoView>
                </PhotoProvider>
                <h1 className=' font-bold text-xl text-left'>{item.title}</h1>
                <hr className='my-2' />
                <p>{item.shortDes}</p>
                <p className='my-2'>{item.category}</p>
                <p>{item.time}</p>
              </div>

              <div className="flex justify-end gap-2">
            <Link to={`/details/${item._id}`}> <button className="w-full bg-green-400 px-2 rounded text-white" >Details</button></Link>
            <Link > <button onClick={()=>handleWishlist(item)} className="w-full bg-blue-400 px-2 rounded text-white" >Wishlist</button></Link>
            </div>
               
            </div>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
        </div>
    );
};

export default HomeCard;