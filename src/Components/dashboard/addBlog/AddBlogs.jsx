import React from 'react';
import { useForm } from 'react-hook-form';

const AddBlogs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = formdata => {
 

        fetch('http://localhost:3000/blog',{
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
    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Blog Title</span>
                        </label>
                        <input type="text" placeholder="Projet Title" className="input input-bordered" {...register("title", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Blog Description</span>
                        </label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your blog description here..." {...register("description", { required: true })}></textarea>
                    </div>
                  
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Blog Image Link</span>
                        </label>
                        <input type="text" placeholder="Blog Image link" className="input input-bordered" {...register("image", { required: true })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Date</span>
                        </label>
                        <input type="date"  className="input input-bordered" {...register("date", { required: true })} />
                    </div>
   
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Upload Now</button>
                    </div>
                </form>
        </div>
    );
};

export default AddBlogs;