import { toast } from 'react-toastify';

const OrderCancelModal = ({orderCancel, setOrderCancel}) => {
const {_id, productName} = orderCancel;
    const handleOrderCancel = () =>{
          fetch(`http://localhost:5000/orders/${_id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              },
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount){
                toast.success("Successfully cancelled");
                setOrderCancel(null);
            }
          })
    }
    return (
        <div>
        <input type="checkbox" id="order-cancel" class="modal-toggle" />
        <div class="modal" role="dialog">
          <div class="modal-box">
            <h3 class=" text-lg text-secondary">Are your sure you want to cancel your order: <span className="text-red-400 font-bold">{productName}</span>
            </h3>
            <div class="modal-action">
              <button onClick={() => handleOrderCancel()} class="btn btn-error btn-xs">
                Confirm
              </button>
              <label for="order-cancel" class="btn btn-xs">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OrderCancelModal;