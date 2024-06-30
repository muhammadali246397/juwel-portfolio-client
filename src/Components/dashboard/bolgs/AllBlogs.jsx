import { useEffect, useState } from "react";


const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])

   

    useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const deleteBlog = id => {
      alert(
        "are you sure delete it!",
          fetch(`http://localhost:3000/blog/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
                alert("deleted successfull")
                const allBlogs = blogs.filter(blog => blog._id !== id);
                setBlogs(allBlogs)
            }
        })
      )
        
    }
    return (
        <div>
             <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        No :
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Blogs Title</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                blogs.map((blog, index) => <tr key={index}>
                                    <th>
                                        <label>
                                            {index +1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td>
                                    <div>
                                                <div className="font-bold">{blog?.title}</div>
                                                
                                            </div>
                                    </td>
                                    <td>
                                    <div className="font-bold">{blog?.date}</div>
                                    </td>
                                    <td>
                                    <button  className="btn btn-ghost btn-xs">Edit</button>
                                    </td>
                                    <th>
                                        <button onClick={() => deleteBlog(blog._id)} className="btn btn-ghost btn-xs">delete</button>
                                    </th>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default AllBlogs;