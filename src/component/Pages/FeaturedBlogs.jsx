import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { Stack } from "@mui/joy";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const FeaturedBlogs = () => {
  const { loadding } = useContext(AuthContext);

  const [top, setTop] = useState([]);

  //   if (loadding) {
  //     return (
  //       <div className="flex justify-center pt-20 min-h-screen ">
  //         <Stack spacing={1}>
  //           {/* For variant="text", adjust the height via font-size */}
  //           <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

  //           {/* For other variants, adjust the size with `width` and `height` */}
  //           <Skeleton variant="circular" width={40} height={40} />
  //           <Skeleton variant="rectangular" width={1280} height={60} />
  //           <Skeleton variant="rounded" width={1280} height={60} />
  //         </Stack>
  //       </div>
  //     );
  //   }

  useEffect(() => {
    axios
      .get("https://assignment-11-server-theta-sable.vercel.app/addblog")
      .then((response) => {
        console.log(response.data);
        const sortedPosts = response.data.sort((a, b) => {
          return b.longDes.split(" ").length - a.longDes.split(" ").length;
        });
        setTop(sortedPosts.slice(0, 10));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(top);

  return (
    <div className="max-w-[1280px] mx-auto min-h-screen p-4 shadow-md">
      <h1>Top Post</h1>
      <div>
 
        
          <div >

            

<div className="overflow-x-auto my-5 shadow-xl">
  <table className="table ">
    {/* head */}
    <thead className="">
      <tr> 
     
        <th className="text-left font-bold text-2xl  bg-gray-200">Serial</th>
        <th className="text-left font-bold text-2xl  bg-gray-200">Blog Title</th>
        <th className="text-left  font-bold text-2xl bg-gray-200 ">Owner Name</th>
        <th className="text-left font-bold text-2xl  bg-gray-200">Post Time</th>
        <th className="text-right font-bold text-2xl bg-gray-200">Owner Photo</th>
        <th className="text-right font-bold text-2xl bg-gray-200">View Details</th>
      </tr>
    </thead>
    {top.map((item) => ( <tbody key={item._id}>
      {/* row 1 */}
      <tr className="border">
        <td className="">1</td>
        <td className="text-left max-w-42">{item.title}</td>
        <td className="text-left font-bold  max-w-28">{item.authorName}</td>
         <td className="text-left  max-w-20">{item.time}</td>
        <td className="flex justify-center ">{item?.authorImage? <img className="rounded-full w-10" src={item?.authorImage} alt="" />: <RotatingLines
  visible={true}
  height="44"
  width="44"
  color="grey"
  strokeWidth="3"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />}</td>
  <td className="w-10 justify-end text-right max-w-20"> <Link to={`/details/${item._id}`}> <button className=" bg-green-400 px-2 rounded text-white w-20" >View</button></Link></td>
      </tr>
    </tbody>))}
  </table>
</div>
          </div>
        
      </div>

    </div>
  );
};

export default FeaturedBlogs;
