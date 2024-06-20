import React from 'react';
import { useForm } from 'react-hook-form';

const AddProject = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    const watchCheckboxes = watch(['option1', 'option2', 'option3']);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-6'>Upload your Project</h1>
            <div>
                <form className="card-body">
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
                        <textarea type="text" placeholder="Project overview" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Select Technology</span>
                        </label>
                        <div className='grid grid-cols-3 gap-4 text-center'>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                HTML
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                CSS
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                Tailwind
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                Tailwind
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                Tailwind
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                Tailwind
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                Tailwind
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                Tailwind
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                Tailwind
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                Tailwind
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                Tailwind
                            </label>
                            <label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    {...register('checkboxGroup.option1')}
                                />
                                Tailwind
                            </label>
                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Project Image Link</span>
                        </label>
                        <input type="text" placeholder="Project Image link" className="input input-bordered" {...register("title", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl">Project Features</span>
                        </label>
                        <textarea type="text" placeholder="Project Features" className="input input-bordered" required />

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