

const Modal = ({btnName,projectDetails}) => {
  console.log(projectDetails)
  const {title, image, technology, liveLink, overview, features,serverLink, clinteLink  } = projectDetails
    return (
        <div>
           
            <button className="btn bg-amber-800 rounded-none mt-5 w-full hover:bg-amber-900 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>{btnName}</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box md:w-11/12  text-start">
                    <form method="dialog">
                        
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold py-5 text-lg">Project Details</h3>
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <p className="py-4 text-xl font-bold text-start">Title : {title}</p>
                    <p className="py-4"><span className="font-bold text-xl">Overview :</span> {overview}</p>
                    <p ><span className="font-bold text-xl">Feature :</span> {features}</p>
                    <p className="pt-4 mb-2 text-xl font-bold">Technology :</p>
                    
                    {
                        technology?.map((tech,index) => <p key={index}>{tech}</p> )
                    }
                    <div className=" py-4">
                        <button className="btn me-4 btn-outline px-5 py-4"><a className="no-underline" href={liveLink}>Live link</a></button>
                        <button className="btn me-4 btn-outline px-5 py-4"><a className="no-underline" href={clinteLink}>Client Link</a></button>
                        <button className="btn btn-outline px-5 py-4"><a className="no-underline" href={serverLink}>Server Link</a></button>
                    </div>
                    
                </div>
            </dialog>
        </div>
    );
};

export default Modal;