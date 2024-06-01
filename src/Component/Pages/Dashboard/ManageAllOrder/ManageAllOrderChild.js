import { useState } from "react";
import { toast } from "react-toastify";
import UnpaidOrderDeleteModal from "./UnpaidOrderDeleteModal";

const ManageAllOrderChild = ({ manageOrder, index, refetch }) => {
  const [unpaidOrderdelete, setUnpaidOrderDelete] = useState(null);
  const {
    _id,
    productName,
    email,
    orderQuantity,
    address,
    phoneNumber,
    totalPrice,
  } = manageOrder;

  const handleShiped = (id) => {
    fetch(`http://localhost:5000/manageAllOrders/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Shipped Product");
          refetch();
        }
      });
  };
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{email}</td>
      <td>{orderQuantity}</td>
      <td>{address}</td>
      <td>{phoneNumber}</td>
      <td>${totalPrice}</td>

      <td className="text-center">
        { manageOrder?.status === "unpaid" && <span className="btn btn-xs bg-red-400">Unpaid</span>}
        { manageOrder?.status === "paid" && <span className="btn btn-xs bg-primary">Pending</span>}
        { manageOrder?.status === "Shipped" && <span className="btn btn-xs bg-green-400">Shipped</span>}
        </td>

      <td className="text-center">
        {(manageOrder?.status === "paid" && (
          <button
            onClick={() => handleShiped(_id)}
            className="btn btn-sm bg-green-400"
          >
            Jump to shipped
          </button>
        )) ||
          (manageOrder?.status === "unpaid" && (
            <label
              onClick={() => setUnpaidOrderDelete(manageOrder)}
              htmlFor="unpaid-order-delete"
              className="btn btn-sm text-red-500 cursor-pointer"
            >
              Delete
            </label>
          ))}
      </td>
      {unpaidOrderdelete && (
        <UnpaidOrderDeleteModal
          refetch={refetch}
          setUnpaidOrderDelete={setUnpaidOrderDelete}
          unpaidOrderdelete={unpaidOrderdelete}
        />
      )}
 
    </tr>
  );
};

export default ManageAllOrderChild;
