
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import Logins from "./Login";
import Register from "./Register";
import AddBlog from "./Pages/AddBlog";
import AllBlogs from "./Pages/AllBlogs";
import FeaturedBlogs from "./Pages/FeaturedBlogs";
import Wishlist from "./Pages/Wishlist";
import ErrorPage from "./Pages/ErrorPage";
import DetailsBlog from "./Pages/DetailsBlog";
import PrivetRout from "./PrivetRout";
import UpdateBlog from "./Pages/UpdateBlog";
import MyPost from "./Pages/MyPost";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            // loader: ()=> fetch('https://assignment-11-server-theta-sable.vercel.app/addblog')
        },
        {
          path: '/login',
          element: <Logins></Logins> 
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/AddBlog',
          element: <AddBlog></AddBlog>
        },
        {
          path: '/AllBlogs',
          element: <AllBlogs></AllBlogs>,
          loader: ()=> fetch('https://assignment-11-server-theta-sable.vercel.app/addblog')
        },
        {
          path: '/Featured',
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path: '/wishlist',
          element: <PrivetRout><Wishlist></Wishlist></PrivetRout>,
          // loader: ()=> fetch('https://assignment-11-server-theta-sable.vercel.app/addblog')
        },
        {
          path: '/details/:_id',
          element: <PrivetRout><DetailsBlog></DetailsBlog></PrivetRout>,
          loader: ()=> fetch('https://assignment-11-server-theta-sable.vercel.app/addblog')
        },
        {
          path: '/update/:id',
          element: <PrivetRout><UpdateBlog></UpdateBlog></PrivetRout>,
          loader: ({params}) => fetch(`https://assignment-11-server-theta-sable.vercel.app/addblog/${params.id}`)
        },
        {
          path: "/mypost",
          element: <PrivetRout><MyPost></MyPost></PrivetRout>
        }
      
    ]
  },
]);


export default router;