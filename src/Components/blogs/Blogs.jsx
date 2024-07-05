import { Zoom } from "react-awesome-reveal";
import Container from "../Container/Container";
import { useEffect, useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://juwel-server.vercel.app/blogs')
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
                <div data-aos='fade-up' data-aos-dealy="100" className="md:grid md:grid-cols-3 gap-8">
                    {
                        blogs?.map((blog,index) => <div key={index} className="bg-white mb-4 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all  rounded-lg">
                            <div className="h-[180px] rounded-md">
                                <img className="w-full h-full overflow-hidden rounded-t-lg" src={blog.image} alt="" />
                            </div>
                            <div className="px-4 py-2">
                                <h3 className="text-xl font-bold py-2 truncate">{blog.title}</h3>
                                <p className="text-ellipsis line-clamp-3 overflow-hidden ">{blog.description}</p>
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