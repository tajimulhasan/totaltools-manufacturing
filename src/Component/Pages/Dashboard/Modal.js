import { toast } from "react-toastify";

const Modal = ({userRemove, setUserRemove, refetch}) => {
  const {email} = userRemove;
  const handleRemove = () =>{
  fetch(`http://localhost:5000/users/${email}`, {
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
    <input type="checkbox" id="remove-user" class="modal-toggle" />
    <div class="modal" role="dialog">
      <div class="modal-box">
        <h3 class=" text-lg text-secondary">Are your sure you want to delete <span className="text-red-400 font-bold">{email}</span>
        </h3>
        <div class="modal-action">
          <button onClick={() => handleRemove()} class="btn btn-error btn-xs">
            Confirm
          </button>
          <label for="remove-user" class="btn btn-xs">
            Close!
          </label>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Modal;
