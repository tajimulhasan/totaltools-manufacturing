import { toast } from 'react-toastify';

const OrderCancelModal = ({orderCancel, setOrderCancel}) => {
const {_id, productName} = orderCancel;
    const handleOrderCancel = () =>{
          fetch(`https://totaltools-manufacturing-server-site.onrender.com/orders/${_id}`, {
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
        <input type="checkbox" id="order-cancel" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className=" text-lg text-secondary">Are your sure you want to cancel your order: <span className="text-red-400 font-bold">{productName}</span>
            </h3>
            <div className="modal-action">
              <button onClick={() => handleOrderCancel()} className="btn btn-error btn-xs">
                Confirm
              </button>
              <label for="order-cancel" className="btn btn-xs">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OrderCancelModal;