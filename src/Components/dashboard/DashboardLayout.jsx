import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCoins } from "react-icons/fa6";

const DashboardLayout = () => {
    return (
        <div>
           <div className='grid grid-cols-12 '>
            <div className='col-span-3 bg-black text-[#e7e9fb] px-2 h-[100vh] flex flex-col'>
                <Link className='w-full   px-2 py-3 font-semibold truncate hover:text-white hover:font-bold text-lg inline-flex items-center'><FaCoins /> <span className='ms-2'>Dashboard</span></Link>
                <Link className='w-full   px-2 py-3 font-semibold truncate hover:text-white hover:font-bold text-lg'>All Projects</Link>
                <Link className='w-full   px-2 py-3 font-semibold truncate hover:text-white hover:font-bold text-lg'>Add Project</Link>
                <Link className='w-full   px-2 py-3 font-semibold truncate hover:text-white hover:font-bold text-lg'>All Blogs</Link>
                <Link className='w-full   px-2 py-3 font-semibold truncate hover:text-white hover:font-bold text-lg'>Add Blogs</Link>
                <Link className='w-full   px-2 py-3 font-semibold truncate hover:text-white hover:font-bold text-lg'>Upload Resume</Link>
                <Link className='w-full   px-2 py-3 font-semibold truncate hover:text-white hover:font-bold text-lg'>Home</Link>
            </div>
            <div className='col-span-9 bg-[#e7e9fb] border'>
                <div className='mx-10 mt-10'>
                    <Outlet/>
                </div>
            </div>
           </div>
        </div>
    );
};

export default DashboardLayout;