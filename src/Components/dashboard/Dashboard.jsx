import React from 'react';
import AllProject from './allProject/AllProject';
import AllBlogs from './bolgs/AllBlogs';

const Dashboard = () => {
    return (
        <div>
            <h2 className='font-xl font-bold my-5'>All Projects</h2>
            <div>
                <AllProject />
            </div>
            <h2 className='font-xl font-bold my-5'>All Blogs</h2>
            <div>
                <AllBlogs />
            </div>
           
           
           </div>
    );
};

export default Dashboard;