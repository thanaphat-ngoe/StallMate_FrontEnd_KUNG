import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import pfImg from '../assets/profile.png';
import ntImg from '../assets/bell.png';
import burghome from '../assets/burghome.png'
import cakeh from '../assets/cakedhome.png';
import grill from '../assets/grilledchic.png';
import salad from '../assets/salad.png';
import siam from '../assets/siam.png';
import { useClientAuth } from '../utilities/ClientAuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientHome.css';

const ClientHome = () => {
	const { authData } = useClientAuth();
	const [ query, setQuery ] = useState('');
	const { username } = useParams();
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Search Query:', query);
		setQuery('');
		console.log(typeof (username));
	};

	return (
		<div className='container-fluid'>

			<div className='container-fluid fixed-top d-flex flex-column justify-content-center align-items-center text-white'
				style={{ width: '100vw', height: '20vw', background: '#191A1F' , marginTop:"9.25vw"}}
			>
				<div className='container-fluid d-flex justify-content-center align-items-center'>
					<div className="container-fluid d-flex flex-row justify-content-around align-items-center" style={{ width: '100vw', height: '18.6vw', background: '#191A1F' }}>
						<img src={pfImg} alt=""
							style={{ width: '11.6vw', height: '11.6vw', objectFit: 'cover' }}
						/>
						<div className="d-flex justify-content-center align-items-center" style={ { width: "50vw", marginTop: "2.5vw" } }>
							<p className="h3 mx-2" style={{ fontWeight: '300', fontSize: '3.5vw' }}>{authData?.clientData.clientName}</p>
						</div>
						<img src={ntImg} alt=""
							style={{ width: '7vw', height: '7vw', filter: 'invert(1)', marginLeft: '30vw' }}
						/>
					</div>
				</div>
				<div className="container-fluid" style={{ width: '95vw', marginLeft: 'auto', marginRight: 'auto', marginBottom: "5vw" }}>
					<form onSubmit={handleSubmit} className='w-100 d-flex justify-content-between'>
						<div className="input-group" style={{marginBottom:"5vw"}}>
							<span className="input-group-text" style={{ background: '#0E162C', border: 'none', height:"10vw" }}>
								<i className="bi bi-search" style={{ color: 'white' }}></i>
							</span>
							<input
								type="text"
								className="form-control custom-placeholder"
								placeholder="Search"
								aria-label="Search"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								required
								style={{ background: '#0E162C', height: '10vw', border: 'none' }}
							/>
						</div>
					</form>
				</div>
			</div>

			<div style={{ height: '25vw' }}></div>
			<div className="container-fluid d-flex justify-content-center align-items-center" style={{ marginTop: "10vw", marginBottom:"5vw" }}>
					<img
						src={burghome}
						alt=""
						style={{
							width: '90vw',
							height: 'auto',
							borderRadius: '5vw',

						}}
					/>
			</div>
			<div className="container-fluid d-flex justify-content-between" style={{ fontSize: "4vw" }}>
				<p className='text-white'>Favorites</p>
				<a className='text-success' href="">See all</a>
			</div>
			<div className="row" style={{ marginTop: "8vw" }}>
				<div className="col d-flex justify-content-around">
					<div style={{ position: "relative", width: "40vw", height: "45vw" }}>
						<div className="card" style={{ width: "100%", height: "100%", borderRadius: "7vw", background: 'white' }}>
							<img
								src={cakeh}
								alt=""
								style={{
									width: "38vw",
									height: "38vw",
									objectFit: "cover",
									position: "absolute",
									top: "-20%",
									left: "50%",
									transform: "translate(-50%, 0)"
								}}
							/>
							<div style={{
								position: "absolute",
								bottom: "2vw",
								left: "2vw",
								right: "2vw",
								color: "white",
								background: "none",
								borderRadius: "1vw",
								padding: "1vw",
								textAlign: "start",
								width: "20vw"
							}}>
								<p style={{ color: "black", fontSize: "4.5vw", fontWeight: "500" }}>Cakes Lover</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col d-flex justify-content-around">
					<div style={{ position: "relative", width: "40vw", height: "45vw" }}>
						<div className="card" style={{ width: "100%", height: "100%", borderRadius: "7vw", background: 'white' }}>
							<img
								src={siam}
								alt=""
								style={{
									width: "41vw",
									height: "41vw",
									objectFit: "cover",
									position: "absolute",
									top: "-24%",
									left: "50%",
									transform: "translate(-50%, 0)"
								}}
							/>
							<div style={{
								position: "absolute",
								bottom: "2vw",
								left: "2vw",
								right: "2vw",
								color: "white",
								background: "none",
								borderRadius: "1vw",
								padding: "1vw",
								textAlign: "start",
								width: "25vw"
							}}>
								<p style={{ color: "black", fontSize: "4.5vw", fontWeight: "500" }}>Siam
									Brasserie</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid d-flex justify-content-between" style={{ marginTop: "6vw", fontSize: "4vw" }}>
				<p className='text-white'>Order History</p>
				<a className='text-success' href="">See all</a>
			</div>
			<div className="row" style={{ marginTop: "8vw" }}>
				<div className="col d-flex justify-content-around">
					<div style={{ position: "relative", width: "40vw", height: "45vw" }}>
						<div className="card" style={{ width: "100%", height: "100%", borderRadius: "7vw", background: 'white' }}>
							<img
								src={salad}
								alt=""
								style={{
									width: "38vw",
									height: "38vw",
									objectFit: "cover",
									position: "absolute",
									top: "-20%",
									left: "48%",
									transform: "translate(-50%, 0)"
								}}
							/>
							<div style={{
								position: "absolute",
								bottom: "2vw",
								left: "2vw",
								right: "2vw",
								color: "white",
								background: "none",
								borderRadius: "1vw",
								padding: "1vw",
								textAlign: "start",
								width: "25vw"
							}}>
								<p style={{ color: "black", fontSize: "4.5vw", fontWeight: "500" }}>Prawn mix salad</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col d-flex justify-content-around">
					<div style={{ position: "relative", width: "40vw", height: "45vw" }}>
						<div className="card" style={{ width: "100%", height: "100%", borderRadius: "7vw", background: 'white' }}>
							<img
								src={grill}
								alt=""
								style={{
									width: "41vw",
									height: "41vw",
									objectFit: "cover",
									position: "absolute",
									top: "-20%",
									left: "50%",
									transform: "translate(-50%, 0)"
								}}
							/>
							<div style={{
								position: "absolute",
								bottom: "2vw",
								left: "2vw",
								right: "2vw",
								color: "white",
								background: "none",
								borderRadius: "1vw",
								padding: "1vw",
								textAlign: "start",
								width: "25vw"
							}}>
								<p style={{ color: "black", fontSize: "4.5vw", fontWeight: "500" }}>BBQ Chicken</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientHome;