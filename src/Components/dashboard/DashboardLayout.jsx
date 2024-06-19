import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBlog, FaCircleExclamation, FaCoins, FaFileImport, FaGear, FaUser } from "react-icons/fa6";
import { FaFileUpload, FaHome, FaUpload } from "react-icons/fa";

const DashboardLayout = () => {
    return (
        <div>
           <div className='grid grid-cols-12 '>
            <div className=' bg-black text-[#e7e9fb] px-2 h-[100vh] sticky top-0 flex flex-col  col-span-2'>
                <Link className='w-full px-2 py-3 font-semibold  hover:text-white hover:font-bold text-lg inline-flex items-center'><span><FaCoins /></span> <span className='ms-4 truncate'>Dashboard</span></Link>
                <Link to='/dashboard/projects' className='w-full   px-2 py-3 font-semibold  hover:text-white hover:font-bold text-lg inline-flex items-center'><span><FaCircleExclamation /></span> <span className='ms-4 truncate'>Projects</span></Link>
                <Link to='/dashboard/blogs' className='w-full   px-2 py-3 font-semibold  hover:text-white hover:font-bold text-lg inline-flex items-center'><span><FaBlog /></span> <span className='ms-4 truncate'>Blogs</span></Link>
                <Link to='/dashboard/addProject' className='w-full   px-2 py-3 font-semibold  hover:text-white hover:font-bold text-lg inline-flex items-center'><span><FaUpload /></span> <span className='ms-4 truncate'>Add Project</span></Link>
                <Link to='/dashboard/addBlogs' className='w-full   px-2 py-3 font-semibold  hover:text-white hover:font-bold text-lg inline-flex items-center'><span><FaFileUpload /></span> <span className='ms-4 truncate'>Add Blogs</span></Link>
                <Link to="/dashboard/resume"className='w-full   px-2 py-3 font-semibold  hover:text-white hover:font-bold text-lg inline-flex items-center'><span><FaFileImport /></span> <span className='ms-4 truncate'>Upload Resume</span></Link>
                <Link className='w-full   px-2 py-3 font-semibold  hover:text-white hover:font-bold text-lg inline-flex items-center'><span><FaUser /></span> <span className='ms-4 truncate'>Profile</span></Link>
                <Link className='w-full   px-2 py-3 font-semibold  hover:text-white hover:font-bold text-lg inline-flex items-center'><span><FaGear /></span> <span className='ms-4 truncate'>Setting</span></Link>
                <Link to="/" className='w-full   px-2 py-3 font-semibold  hover:text-white hover:font-bold text-lg inline-flex items-center'><span><FaHome /></span> <span className='ms-4 truncate'>Home</span></Link>
            </div>
            <div className='col-span-10 bg-[#e7e9fb]'>
                <div className='mx-10 mt-10'>
                    <Outlet/>
                </div>
            </div>
           </div>
        </div>
    );
};

export default DashboardLayout;