import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authprovider/Authprovider';
import { Stack } from '@mui/joy';
import Skeleton from 'react-loading-skeleton';

const AddBlog = () => {

  const {user, loadding} = useContext(AuthContext)
    const naviget = useNavigate()

    if(loadding){
      return   <div className='flex justify-center pt-20 min-h-screen max-w-[1280px] mx-auto'>
<Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
     <div className=''> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></div>

      {/* For other variants, adjust the size with `width` and `height` */}
     <div className='grid grid-cols-2 gap-4'>
   <div className=' col-span-2'>  <Skeleton variant="rectangular" width={780} height={40} /></div>
   <div className=''>  <Skeleton variant="rectangular" width={380} height={40} /></div>
     <div> <Skeleton variant="rectangular" width={380} height={40} /></div>
     <div> <Skeleton variant="rectangular" width={380} height={40} /></div>
     <div> <Skeleton variant="rectangular" width={380} height={40} /></div>
      <div className=' col-span-2'><Skeleton variant="rounded" width={780} height={30} /></div>
     </div>
    </Stack>
      </div>
  }



    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const photo = form.url.value;
        const title = form.title.value;
        const shortDes = form.shortdes.value;
        const longDes = form.longdes.value;
        const category = form.cars.value;
        const email = user?.email
        const authorImage = user?.photoURL
        const authorName = user?.displayName
        const time  = new Date()


        // const email = user.email;
        const newData = {photo, title, shortDes, longDes, category, email, authorImage, authorName, time};

        console.log(newData);


        fetch('https://assignment-11-server-theta-sable.vercel.app/addblog',{
            method: 'POST',
            headers:
                {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
              // naviget('/category')
              naviget(location?.state ? location.state : '/')
              e.target.reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Turists spot addeded successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         
        })
    }



    return (
        <div className='bg-gray-800 min-h-screen'>
      <Helmet>
        <title>Sport Blog | AddSprot</title>
        </Helmet>
<div className='max-w-[1280px] mx-auto content-center min-h-scree' >
<form onSubmit={handleAdd} className='lg:w-4/5 mx-auto bg-white shadow-sm shadow-gray-700 px-6  py-10 mb-10' action="" data-aos="fade-down">

{/* <h1 className='text-5xl text-center text-white font-bold mb-4'>Add Your Tourists Spot</h1> */}
<h1 className='text-center lg:text-5xl text-xl'>
        {' '}
        {/* Using the Typewriter component */}
        <span style={{ color: '#5755FE', fontWeight: 'bold', }}>
          <Typewriter
            words={['Add Your favorite Tourists Spot!']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
<hr className=' border-gray-500 lg:border-2' />

<div className='justify-center grid grid-cols-2 gap-4 mt-32'  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
<input className='w-full outline-none py-2 px-2 border-none rounded bg-gray-200 text-black' type="url" name="url" required placeholder={'Photo URL'} id="" />
<input className='w-full outline-none py-2 px-2 border-none rounded bg-gray-200 text-black'   type="text" name="title" placeholder='Title' id="" />
<input className='w-full outline-none py-2 px-2 border-none rounded bg-gray-200 text-black'   type="text" name="shortdes" placeholder='Short description' id="" />

<select name="cars" className='w-full outline-none py-2 px-2 rounded border-none border-gray-400  bg-gray-200 text-black'>
    <option value="calegory" aria-disabled placeholder="kfkf" required><span className='text-gray-500 disabled:'>Select category</span></option>
    <option value="Football">Football</option>
    <option value="Cricket">Cricket</option>
    <option value="Hokey">Hokey</option>
    <option value="Basketball">Basketball</option>
    <option value="Swimming">Swimming </option>
    <option value="Badminton">Badminton</option>
    <option value="Kabadi">Kabadi</option>
  </select>

<input className='w-full outline-none py-2 px-2 border-none border-gray-400 rounded  bg-gray-300 text-black col-span-2'   type="text" name="longdes" placeholder='Long description' id="" />
<input className='w-full py-1 rounded px-2 cursor-pointer bg-green-400 text-white font-bold col-span-2 mt-8'  type="submit" name="submit" value="Add Blog" placeholder='' id="" />
</div>
              
</form>
</div>


        </div>
    );
};

export default AddBlog;