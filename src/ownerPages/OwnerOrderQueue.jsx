import { useNavigate } from "react-router-dom";
import OrderQueueCard from "../ownerComponents/OrderQueueCard";
import { useState } from "react";
import OrderDetail from "../ownerComponents/OrderDetail"
const OrderQueue = () => {
  const navigate = useNavigate();

  const LEFT_ARROW = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-arrow-left"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
      />
    </svg>
  );


  const ordersList = [
    {
      orderId: "641a4a6d3b9a6e1d5c8f7e29",
      customerId: "c12345",
      items: [
        { name: "Margherita Pizza", quantity: 2, price: 10.99 },
        { name: "Caesar Salad", quantity: 1, price: 7.49 },
      ],
      totalAmount: 29.47,
      tableNumber: 12,
      createdAt: "2024-11-22T15:30:00Z",
    },
    {
      orderId: "641a4a6d3b9a6e1d5c8f7e30",
      customerId: "c67890",
      items: [
        { name: "Spaghetti Carbonara", quantity: 1, price: 14.99 },
        { name: "Garlic Bread", quantity: 2, price: 3.49 },
      ],
      totalAmount: 21.97,
      tableNumber: 5,
      createdAt: "2024-11-22T16:00:00Z",
    },
    {
      orderId: "641a4a6d3b9a6e1d5c8f7e30",
      customerId: "c67890",
      items: [
        { name: "Spaghetti Carbonara", quantity: 1, price: 14.99 },
        { name: "Garlic Bread", quantity: 2, price: 3.49 },
      ],
      totalAmount: 21.97,
      tableNumber: 5,
      createdAt: "2024-11-22T16:00:00Z",
    }]

  const handleBackBtn = () => {
    navigate("/ownerProfile");
  };

  const [detail, setDetail] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const handleCardClick = () => {
    console.log("Toggle");
    setDetail(!detail); // Show detail view
    setSelectedOrder(order)
  };

  

  return (
    <>



      {detail ? (
        <OrderDetail detail={detail} setDetail={setDetail} order={selectedOrder}/>
      ) : (
        <div className="container-fluid  d-flex flex-column p-0">
          <div
            className="container-fluid"
            style={{
              minHeight: "14%",
            }}
          >
            <div className="row d-flex ">
              <i
                className="text-white col-2 align-self-start my-3 ms-2 px-0 "
                onClick={handleBackBtn}
              >
                {LEFT_ARROW}
              </i>
              <div className="text-white col-8 align-self-end mt-4 mx-0 ms-2">
                <div
                  className="d-flex justify-content-start "
                  style={{ fontSize: "2em", padding: "0px" }}
                >
                  Order Queue
                </div>
              </div>
            </div>
          </div>
          <div
            className="row mt-2 d-flex justify-content-center"
            style={{ width: "80%", margin: "0 auto" }}
          >
            <h4 className="text-white">Pending</h4>
            <hr className="text-white" style={{ border: "2px solid white" }} />
          </div>
          {/* {if order still in pending on db} */}
          <div>
            {
              ordersList.map((order) => (
                <OrderQueueCard 
                key={order.orderId}
                clickShowDetail={handleCardClick}
                order={order} />
              ))
            }
          </div>
        </div>
      )}
    </>
  );
};

export default OrderQueue;
