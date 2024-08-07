import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { BiUser } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaEye, FaEyeSlash, FaGithub, FaFacebook } from "react-icons/fa";
import { AuthContext } from "./Authprovider/Authprovider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import axios from "axios";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [errorUser, setErrorUser] = useState("");
  const [chacked, setChacked] = useState("");

const {createUser, user} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("url");
    const password = form.get("password");
    const Accept = e.target.terms.checked;
    console.log(name, email, photo, password);

  
    if (password.length < 6) {
      setErrorUser("password must be 6 caracter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorUser("password must be a Uppercass");
      return;
    }else if(!/[a-z]/.test(password)){
      setErrorUser("password must be a Loarcass");
      return;
    }else if(!/[0-10]/.test(password)){
      setErrorUser("password must be a apfabet");
      return;
    } else if (!Accept) {
      setChacked("pleace chacked in");
      return;
    }
    setErrorUser("");
    setChacked("");

    createUser(email, password, photo, name)
    .then((result)=>{
      console.log(result.user);
      const loggedInUser = result.user.email
      axios.post('https://assignment-11-server-theta-sable.vercel.app/jwt', loggedInUser, {withCredentials: true})


      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
    })
    .catch((error)=>{
      console.log(error);
    })
  };

  return (
    <div className="min-h-screen w-full">
      <Helmet>
        <title>Tour Asia | Register</title>
        </Helmet>
      <div>
        <div className="bg-gray-950 w-80 mx-auto mt-28  shadow rounded-b">
          <div className="flex text-center login bg-[#161616a8] mb-6">
            <NavLink to="/login" className=" flex-1 p-2 px-4 text-white">
              Login
            </NavLink>
            <NavLink to="/register" className="register flex-1 p-2 px-4 text-white">
              Register
            </NavLink>
          </div>
          <form onSubmit={handleRegister} className="p-6 text-left space-y-2">
            <label className="flex items-center">
              <MdOutlineDriveFileRenameOutline className="font-bold absolute text-white" />{" "}
              <input
                className="w-full pl-6 py-2 border-b-2 text-white border-gray-700 outline-none bg-gray-950"
                type="text"
                name="name"
                placeholder="Name"
                id=""
              />
            </label>

            <label className="flex items-center">
              <MdOutlineMailOutline className="font-bold absolute text-white" />{" "}
              <input
                className="w-full pl-6 py-2 border-b-2 text-white border-gray-700 outline-none bg-gray-950"
                type="text"
                name="email"
                placeholder="Email"
                required
                id=""
              />
            </label>

            <label className="flex items-center">
              <FaLink className="font-bold absolute text-white " />{" "}
              <input
                className="w-full pl-6 py-2 border-b-2 text-white border-gray-700 outline-none bg-gray-950"
                type="url"
                name="url"
                placeholder="Photo Url"
                id=""
              />
            </label>

            <label className="flex  items-center">
              <RiLockPasswordLine className="font-bold absolute text-white" />{" "}
              <input
                className="w-full pl-6 py-2 border-b-2  text-white border-gray-700 outline-none bg-gray-950"
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                id=""
              />
              <span className="-ml-4" onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEye className="text-white" /> : <FaEyeSlash className="text-white" />}
              </span>
            </label>
            <p className="text-red-500">{errorUser}</p>

            <p className="text-gray-400">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a className="underline" href="">
                privacy policy.
              </a>
            </p>
            <label>
              <input className="mt-4" type="checkbox" name="terms" htmlFor="terms" id="" />{" "}
              <a className="text-white">Therms & Condition</a>
              <p className="text-red-500  mb-1 underline">{chacked}</p>
            </label>

            <label className="">
              <input
                className="border border-gray-600 rounded cursor-pointer text-white w-full p-2 my-4 font-bold"
                type="submit"
                value="Sign-up"
                name=""
                id=""
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
