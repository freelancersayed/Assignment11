import React, { useContext, useEffect, useState } from "react";
import Banner from "../Pages/Banner";
import Slider from "../Pages/Slider";
// import { useLoaderData } from 'react-router-dom';
import HomeCard from "./HomeCard";
import Skeleton from "react-loading-skeleton";
import { Stack } from "@mui/joy";
import { AuthContext } from "../Authprovider/Authprovider";

const Home = () => {
  const [blog, setBlog] = useState([]);
  const { loadding } = useContext(AuthContext);
  // const sportData = useLoaderData()
  // setData(sportData)

  // if(loadding){
  //     return    <div className='flex justify-center pt-2 min-h-screen '>
  //   <Stack spacing={1}>
  //   <div className="grid grid-cols-4 gap-4 ">
  //   <div className=""> <Skeleton variant="rectangular" width={300} height={180} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={300} height={180} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={300} height={180} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={300} height={180} /></div>

  //   <div className=""> <Skeleton variant="rectangular" width={300} height={20} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={300} height={20} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={300} height={20} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={300} height={20} /></div>

  //   <div className=""> <Skeleton variant="rectangular" width={300} height={10} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={300} height={10} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={300} height={10} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={300} height={10} /></div>

  //   <div className="flex gap-4">
  //   <div className="flex-1"> <Skeleton variant="rectangular" width={140} height={20} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={140} height={20} /></div>
  //   </div>
  //   <div className="flex gap-4">
  //   <div className="flex-1"> <Skeleton variant="rectangular" width={140} height={20} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={140} height={20} /></div>
  //   </div>
  //   <div className="flex gap-4">
  //   <div className="flex-1"> <Skeleton variant="rectangular" width={140} height={20} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={140} height={20} /></div>
  //   </div>
  //   <div className="flex gap-4">
  //   <div className="flex-1"> <Skeleton variant="rectangular" width={140} height={20} /></div>
  //   <div className=""> <Skeleton variant="rectangular" width={140} height={20} /></div>
  //   </div>

  //   </div>

  //   </Stack>
  //     </div>
  //   }

  useEffect(() => {
    fetch("https://assignment-11-server-theta-sable.vercel.app/addblog")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  }, []);

  console.log(blog);
  return (
    <div className="min-h-screen ">
      <Slider></Slider>
      {/* <Banner></Banner> */}

      <h1 className="text-center text-4xl">Home</h1>

      <div className="grid grid-cols-4 gap-4 shadow-md max-w-[1280px] mx-auto">
        {blog.map((item) => (
          <HomeCard key={item._id} item={item}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
