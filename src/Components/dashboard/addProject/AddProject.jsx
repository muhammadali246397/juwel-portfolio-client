import React from 'react';
import { useForm } from 'react-hook-form';

const AddProject = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const technologies = [
        'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'React JS', 'React Hook Form', 'Redux','Node Js','Express Js', "MongoDB", "TypeScript", 'Moongose', 'Next Js',
    ];
    const onSubmit = data => {
        const selectedTechnologies = Object.keys(data)
        .filter(key => technologies.includes(key) && data[key] === true);
        const formdata = {
            title:data.title,
            overview:data.overview,
            technology:selectedTechnologies,
            image:data.image,
            features:data.features,
            liveLink:data.liveLink,
            clinteLink:data.clinteLink,
            serverLink:data.serverLink,
            date:data.date
          
        }

        fetch('https://juwel-server.vercel.app/project',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(formdata)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged === true){
                alert('project added complete')
            }else{
                alert('something went worng')
            }
        })
       
    } ;
    
    console.log(errors);

   

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-6'>Upload your Project</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Project Title</span>
                        </label>
                        <input type="text" placeholder="Projet Title" className="input input-bordered" {...register("title", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Project Overview</span>
                        </label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your project overview here..." {...register("overview", { required: true })}></textarea>
                        {/* <textarea aria-rowspan='4' type="text" placeholder="Project overview" className="input input-bordered" {...register("overview", { required: true })} /> */}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Select Technology</span>
                        </label>
                        <div className='grid grid-cols-3 gap-4'>
                            {technologies.map((tech) => (
                                <div key={tech}>
                                    <label> 
                                        <input
                                        className='me-2'
                                            type="checkbox"
                                            {...register(tech)}
                                        />
                                        {tech}
                                    </label>
                                </div>
                            ))}

                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Project Image Link</span>
                        </label>
                        <input type="text" placeholder="Project Image link" className="input input-bordered" {...register("image", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Project Features</span>
                        </label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your project features here..." {...register("features", { required: true })}></textarea>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Project Live Link</span>
                        </label>
                        <input type="text" placeholder="Project Live link" className="input input-bordered" {...register("liveLink", { required: true })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Project Clinte side repeository</span>
                        </label>
                        <input type="text" placeholder="Project Clinte side repo link" className="input input-bordered" {...register("clinteLink", { required: true })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Project server side repeository</span>
                        </label>
                        <input type="text" placeholder="Project server side repo link" className="input input-bordered" {...register("serverLink", { required: true})} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Date</span>
                        </label>
                        <input type="date"className="input input-bordered" {...register("date", { required: true })} />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Upload Now</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProject;