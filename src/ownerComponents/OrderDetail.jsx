import OrderDetailCard from "./OrderDetailCard";

const OrderDetail = ({ detail, setDetail, order }) => {
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

  const handleBackBtn = () => {
    setDetail(false);
  };

  const handleCompletedBtn = () => {
    console.log("Completed");
  };
  console.log(order)
  return (
    <div className="container-fluid d-flex flex-column pd-0 text-white">
      <div className="row d-flex ">
        <i
          className="col-3 align-self-start mt-3 mb-1 ms-0 px-0 ms-2"
          onClick={handleBackBtn}
        >
          {LEFT_ARROW}
        </i>
      </div>
      <div className="row d-flex h2 ms-5 mt-0">Order Detail</div>
      <div className="row h3 fw-bold d-flex justify-content-end me-3">
        Table: {order.tableNumber}
      </div>
      <div className="row d-flex">
        <img className="col-4" src="src/assets/siam.png" alt="" />
        <h5 className="col-8 text-white align-self-center">Siam Basserie{}</h5>
      </div>
      <div className="row d-flex"></div>
      <h6 className="col-3 d-felx ms-4">Menu</h6>
      {order.items.map((item, index) => (
        <OrderDetailCard key={index} item={item}/>
      ))}
      
      <hr
        className="text-white mt-2"
        style={{ border: "2px solid white", width: "90vw", margin: "0 auto" }}
      />
      <div className="row d-flex ms-3 mt-2">
        <h6 className="col-3">Total</h6>
        <div className="col-6">{}</div>
        <h6 className="col-3"> {order.totalAmount} ฿</h6>
      </div>
      <div className="row d-flex ms-3 mt-2">
        <h6 className="col-6">Payment Medthod</h6>
        <div className="col-3"></div>
        <h6 className="col-3"> Card</h6>
      </div>

      <div className="row d-flex mt-2 justify-content-center">
        <button
          style={{ backgroundColor: "green", color: "white", width: "80vw" }}
          onClick={handleCompletedBtn}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
