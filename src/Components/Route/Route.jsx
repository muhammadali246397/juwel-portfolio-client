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
          path:'dashboard',
          element:<AllProject/>
        },
        {
          path:'addProject',
          element:<AddProject/>
        },
        {
          path:'addBlogs',
          element:<AddBlogs/>
        }
      ]
    }
    
  ]);

  export default router;