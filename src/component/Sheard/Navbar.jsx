import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import { Menu } from '@mui/joy';
import { MenuButton } from "@chakra-ui/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import '../../index.css'



const navlink = <>

   <div className="flex gap-5 NavActive ">
   <NavLink  className="px-2 py-1 rounded-sm" to='/'>Home</NavLink>
    <NavLink className="px-2 py-1 rounded-sm" to='/AddBlog'>Add-Blog</NavLink>
    <NavLink className="px-2 py-1 rounded-sm" to='/AllBlogs'>All-Blogs</NavLink>
    <NavLink className="px-2 py-1 rounded-sm" to='/Featured'>Featured-Blogs</NavLink>
    <NavLink className="px-2 py-1 rounded-sm" to='/wishlist'>Wishlist</NavLink>
    <NavLink className="px-2 py-1 rounded-sm" to='/mypost'>My-Post</NavLink>
   </div>
</>

const Navbar = () => {


    const {user, logOut} = useContext(AuthContext)
    console.log(user);




    const handleSignOut = () => {
        logOut()
        .then(result=>{
          console.log('logOute', result.user);
        })
        .catch(error=>{
          console.log('not logoute', error);
        });
      };
    



    return (
        <div className="">
 <div className="bg-[#406dffc5] fixed z-10 w-full shadow-md text-white flex items-center justify-between px-4 py-3">
 
      <div className="flex items-center text-2xl font-bold">
        <Link to="/">
          RegulerBlog
        </Link>
      </div>
      <div className="flex items-center">
      {
        navlink
      }
      </div>
      <div className="flex items-center">
       {
        user? <>
        {/* <img className="w-full" src={user.photoURL} alt="" className="h-8 w-8 rounded-full" />
        <Link onClick={handleSignOut}>logOut</Link>
      */}

  <div >
 
  <Dropdown label="Profile">
      <Dropdown.Header>
      <div className="text-center justify-center flex flex-col items-center gap-2">
      <PhotoProvider>
                  <PhotoView src={user.photoURL}>
                     <img className="w-full" src={user.photoURL} alt="" className="h-8 w-8 rounded-full" />
                  </PhotoView>
                </PhotoProvider>
        <h1 className="text-xl font-bold">{user.displayName}</h1>
      </div>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
      <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
      <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
      <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item  onClick={handleSignOut} icon={HiLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  </div>

        </>
        :
        <Link className="bg-green-400 px-4 py-1 rounded font-bold" to="/login">Sign In</Link>
       }
      </div>
     
    </div>
        </div>
    );
};

export default Navbar;