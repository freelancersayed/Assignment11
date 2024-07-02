import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateBlog = () => {
  const { user } = useContext(AuthContext);
  const updateBlog = useLoaderData();
  console.log(updateBlog);

  const { _id, photo, title, shortDes, longDes, category, author } = updateBlog;

  const handleUpdate = (e) => {
    e.preventDefault();
    if(user?.email !== author){
        return 
    }
    const form = e.target;
    const photo = form.url.value;
    const title = form.title.value;
    const shortDes = form.shortdes.value;
    const longDes = form.longdes.value;
    const category = form.cars.value;
    // const email = user.email;
    const updateDate = { photo, title, shortDes, longDes, category };

    console.log(updateDate);

    fetch(`https://assignment-11-server-theta-sable.vercel.app/addblog/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Turists spot Update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-gray-800">
      <Helmet>
        <title>Sport Blog | AddSprot</title>
      </Helmet>
      <div className="max-w-[1280px] mx-auto content-center min-h-scree">
        <form
          onSubmit={handleUpdate}
          className="lg:w-4/5 mx-auto bg-gray-900 shadow-sm shadow-gray-700 px-6  py-10 mb-10"
          action=""
          data-aos="fade-down"
        >
          {/* <h1 className='text-5xl text-center text-white font-bold mb-4'>Add Your Tourists Spot</h1> */}
          <h1 className="text-center lg:text-5xl text-xl">
            {" "}
            {/* Using the Typewriter component */}
            <span style={{ color: "#5755FE", fontWeight: "bold" }}>
              <Typewriter
                words={["Updated successfully!"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <hr className=" border-gray-500 lg:border-2" />

          <div className="justify-center grid grid-cols-2 gap-4 mt-32">
            <input
              className="w-full outline-none py-2 px-2 border-b rounded bg-gray-900 text-white"
              defaultValue={photo} 
              type="url"
              name="url"
              required
              placeholder={"Photo URL"}
              id=""
            />
            <input
              className="w-full outline-none py-2 px-2 border-b rounded bg-gray-900 text-white"
              defaultValue={title}
              type="text"
              name="title"
              placeholder="Title"
              id=""
            />
            <input
              className="w-full outline-none py-2 px-2 border-b rounded bg-gray-900 text-white"
              defaultValue={shortDes}
              type="text"
              name="shortdes"
              placeholder="Short description"
              id=""
            />

            <select
   
              name="cars"
              className="w-full outline-none py-2 px-2 rounded border-b border-gray-400  bg-gray-900 text-white"
              defaultValue={category}
            >
              <option
                value="calegory"
                aria-disabled
                placeholder="kfkf"
                required
              >
                Select category
              </option>
              <option value="Football">Football</option>
              <option value="Criket">Criket</option>
              <option value="Hokey">Hokey</option>
              <option value="Basket">Basket</option>
              <option value="Swimming">Swimming </option>
              <option value="Badminton">Badminton</option>
            </select>

            <input
              className="w-full outline-none py-2 px-2 border-b border-gray-400 rounded  bg-gray-900 text-white col-span-2"
              defaultValue={longDes}
              type="text"
              name="longdes"
              placeholder="Long description"
              id=""
            />
            <input
              className="w-full py-1 rounded px-2 cursor-pointer bg-[#525CEB] text-white font-bold col-span-2 mt-8"
              type="submit"
              name="submit"
              value="Add Blog"
              placeholder=""
              id=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
