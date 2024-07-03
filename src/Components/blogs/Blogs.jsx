import { Zoom } from "react-awesome-reveal";
import Container from "../Container/Container";
import { useEffect, useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="bg-slate-50 py-4 " id="blogs">
            <Container>
                <div className='md:mt-10 mb-14 md:text-left text-center'>
                    <p className='text-amber-800 font-semibold'>BLOGS</p>
                    <h2 className='text-4xl font-extrabold'>
                        <Zoom cascade direction={"down"} duration={100}>Recent Blogs</Zoom></h2>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {
                        blogs?.map((blog,index) => <div key={index} className="bg-white shadow-md hover:shadow-lg hover:-translate-y-2 transition-all px-4 py-2 rounded-lg">
                            <div className="h-[180px] rounded-md">
                                <img className="w-full h-full rounded-md" src={blog.image} alt="" />
                            </div>
                            <div className="pb-4">
                                <h3 className="text-xl font-bold py-2 truncate">{blog.title}</h3>
                                <p className="h-[125px] overflow-hidden ">{blog.description}</p>
                                <button className="px-4 mt-3 py-2 border hover:shadow-md">see more</button>
                            </div>
                        </div> )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Blogs;