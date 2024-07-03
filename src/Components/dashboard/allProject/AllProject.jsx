import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProject = () => {
    const [projects, setProject] = useState([])

    console.log(projects)

    useEffect(() => {
        fetch('https://juwel-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    const deleteProject = id => {
      alert(
        "are you sure delete it!",
          fetch(`https://juwel-server.vercel.app/project/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
                alert("deleted successfull")
                const allProject = projects.filter(singleProject => singleProject._id !== id);
                setProject(allProject)
            }
        })
      )
        
    }
    return (
        <div>
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
                                <th>Project Title</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                projects.map((project, index) => <tr key={index}>
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
                                                        src={project.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td>
                                    <div>
                                                <div className="font-bold">{project?.title}</div>
                                                
                                            </div>
                                    </td>
                                    <td>
                                    <div className="font-bold">{project?.date}</div>
                                    </td>
                                    <td>
                                    <button  className="btn btn-ghost btn-xs">Edit</button>
                                    </td>
                                    <th>
                                        <button onClick={() => deleteProject(project._id)} className="btn btn-ghost btn-xs">delete</button>
                                    </th>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
                {/* {
                    projects?.map((project, index) => 
                        <div
                            key={index}
                        >
                       

                        </div>
                    )
                } */}
            </div>
        </div>
    );
};

export default AllProject;