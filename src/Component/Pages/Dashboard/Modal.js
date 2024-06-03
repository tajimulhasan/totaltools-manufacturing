import { toast } from "react-toastify";

const Modal = ({userRemove, setUserRemove, refetch}) => {
  const {email} = userRemove;
  const handleRemove = () =>{
  fetch(`https://totaltools-manufacturing.vercel.app/users/${email}`, {
    method: "DELETE",
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  } )
  .then(res => res.json())
  .then(data => {
       if(data.deletedCount){
        toast.success("Successfully deleted");
        refetch();
        setUserRemove(null)
       }
  })
  }
  return (
    <div>
    <input type="checkbox" id="remove-user" className="modal-toggle" />
    <div className="modal" role="dialog">
      <div className="modal-box">
        <h3 className=" text-lg text-secondary">Are your sure you want to delete <span className="text-red-400 font-bold">{email}</span>
        </h3>
        <div className="modal-action">
          <button onClick={() => handleRemove()} className="btn btn-error btn-xs">
            Confirm
          </button>
          <label for="remove-user" className="btn btn-xs">
            Close!
          </label>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Modal;
