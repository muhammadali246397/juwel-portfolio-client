

const Modal = ({btnName}) => {
  
    return (
        <div>
           
            <button className="btn bg-amber-800 rounded-none mt-5 w-full hover:bg-amber-900 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>{btnName}</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Website details coming soon</p>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;