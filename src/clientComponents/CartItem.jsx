import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from './CartSlice';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import bin from "../assets/remove.png";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import axios from 'axios';

const CartItem = ({ cartItems, onContinueShopping }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [tableNumber, setTableNumber] = useState('');
	const calculateItemTotal = (item) => item.price * item.quantity;

	const calculateTotalAmount = useSelector(state => state.cart.amount);

	const handleIncrement = (item) => {
		console.log("Incrementing:", item);
		dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
	};

	const handleDecrement = (item) => {
		console.log("Decrementing:", item);
		if (item.quantity === 1) {
			dispatch(removeItem(item.id));
		} else {
			dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
		}
	};


	const handleRemove = (item) => {
		dispatch(removeItem(item.id));
	};
	const handleTableNumberChange = (e) => {
		setTableNumber(e.target.value);
	};

	const handleCheckout = async () => {
		event.preventDefault();

		const simplifiedCartItems = cartItems.map(item => ({
			id: item.id,
			note: item.note,
			price: item.price,
			totalPrice: (item.price * item.quantity).toFixed(2),
			quantity: item.quantity,
		}));
		const orderData = {
			cartItems: simplifiedCartItems,
			totalAmount: calculateTotalAmount.toFixed(2),
			tableNumber: tableNumber,
		};

		console.log('Order Data:', orderData);

		try {
			const response = await axios.post('https://jsonplaceholder.typicode.com/posts', orderData);
			dispatch(clearCart());
			console.log('Order placed successfully:', response.data);
			navigate('/checkingout');
		} catch (error) {
			console.error('Error placing order:', error);
		}

	};

	if (!cartItems.length) {
		return <h3 className='display-1 text-white d-flex justify-content-center align-items-center'>Your cart is empty!</h3>;
	}

	return (
		<div className="cart-container text-white">
			<div>
				{cartItems.map((item) => (
					<div className="card text-white" key={item.id} style={{ background: "#01040F", borderRadius: "5vw", marginBottom: '5vw', marginRight: "1vw", marginLeft: "1vw" }}>
						<div className="row">
							<div className="col">
								<img src={item.imageUrl} alt="" style={{ width: "40vw", height: "auto" }} />
							</div>
							<div className="col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginTop: "4vw" }}>
								<p style={{ fontSize: "5vw", fontWeight: "600" }}>
									{item.item}
								</p>

								<div className="row">
									<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "2vw" }}>
										<span className="badge bg-success rounded-pill" style={{ marginRight: "2vw", width: "25vw", height: "auto", fontSize: "3vw" }}>
											{calculateItemTotal(item).toFixed(2)} THB
										</span>
									</div>
								</div>

								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "2vw 0vw" }}>
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<span onClick={() => handleDecrement(item)} style={{ marginRight: "1vw" }}>
											<img src={minus} style={{ cursor: 'pointer', width: "6vw", height: "auto" }} />
										</span>
										<span style={{ margin: "0 1vw", fontSize: "5vw" }}>{item.quantity}</span>
										<span onClick={() => handleIncrement(item)} style={{ marginLeft: "1vw" }}>
											<img src={plus} style={{ cursor: 'pointer', width: "6vw", height: "auto" }} />
										</span>
									</div>

									<span onClick={() => handleRemove(item)} style={{ marginRight: "5vw" }}>
										<img src={bin} style={{ cursor: 'pointer', width: "6vw", height: "auto" }} />
									</span>
								</div>
							</div>
						</div>

						{item.note && (
							<div className="text-white" style={{ marginTop: '1vw', fontSize: '4vw', padding: '3vw' }}>
								Note : {item.note}
							</div>
						)}
					</div>

				))}

			</div>
			<div>
				<p className='display-5' style={{ marginLeft: "1vw", marginRight: "1vw", marginBottom: "5vw" }}>Table No.</p>
				<form onSubmit={handleCheckout}>
					<input
						type="text"
						value={tableNumber || ''}
						onChange={handleTableNumberChange}
						className="form-control table-form"
						placeholder="Enter Table Number"
						required
						style={{
							backgroundColor: 'black',
							color: 'white',
							borderColor: 'gray',
							marginBottom: "6vw",
							marginLeft: "auto",
							marginRight: "auto",
							width: "95vw",
							height: "10vw",
							display: "block"
						}}
					/>
					<hr style={{
						borderTop: '2px solid grey',
						width: '95vw',
						position: 'relative',
						left: '50%',
						transform: 'translateX(-50%)',
					}} />
					<div className="row" style={{ marginLeft: "1vw", marginRight: '1vw', fontSize: "3.5vw" }}>
						<div className="col-12 d-flex justify-content-between">
							<p>Delivery fee</p>
							<p style={{ color: "#2B964F" }}>20 THB</p>
						</div>
						<div className="col-12 d-flex justify-content-between">
							<p>Total</p>
							<p style={{ color: "#2B964F" }}>{calculateTotalAmount.toFixed(2)} THB</p>
						</div>
						<div className="col-12 d-flex justify-content-between">
							<p>Discounts</p>
							<p style={{ color: "#2B964F" }}>0.00 THB</p>
						</div>
						<div className="col-12 d-flex justify-content-between">
							<p>Cards</p>
							<p style={{ color: "#92E3A9" }}>***456</p>
						</div>
					</div>
					<div className="row d-flex justify-content-center" style={{ marginLeft: "1vw", marginRight: '1vw' }}>
						<button className='row text-white bg-success justify-content-center' type="submit" style={{ height: "11.5vw", fontSize: "4vw" }}>Checkout</button>
					</div>
				</form>
				<div className="row d-flex justify-content-center" style={{ marginLeft: "1vw", marginRight: '1vw' }}>
					<button className='row text-white justify-content-center' onClick={onContinueShopping} style={{ background: "#9B9B9B", marginTop: "2vw", height: "11.5vw", fontSize: "4vw" }}>Continue Shopping</button>
				</div>
			</div>
		</div>

	);
};

export default CartItem;
