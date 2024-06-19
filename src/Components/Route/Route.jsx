import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../login/Login";
import DashboardLayout from "../dashboard/DashboardLayout";
import AllProject from "../dashboard/allProject/AllProject";
import AddProject from "../dashboard/addProject/AddProject";
import AddBlogs from "../dashboard/addBlog/AddBlogs";
import Dashboard from "../dashboard/Dashboard";
import Blogs from "../blogs/Blogs";
import AllBlogs from "../dashboard/bolgs/AllBlogs";
import AddResume from "../dashboard/addResume/AddResume";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/dashboard',
      element:<DashboardLayout />,
      children:[
        {
          path:'/dashboard',
          element:<Dashboard />
        },
        {
          path:'projects',
          element:<AllProject/>
        },
        {
          path:'blogs',
          element:<AllBlogs />
        },
        {
          path:'addProject',
          element:<AddProject/>
        },
        {
          path:'addBlogs',
          element:<AddBlogs/>
        },
        {
          path:'resume',
          element:<AddResume/>
        }
      ]
    }
    
  ]);

  export default router;