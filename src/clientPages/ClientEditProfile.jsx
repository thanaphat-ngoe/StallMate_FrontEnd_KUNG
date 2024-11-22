import { useNavigate } from "react-router-dom";
import { useClientAuth } from '../utilities/ClientAuthContext';
import style from "./ClientEditProfile.module.css";

const ClientEditProfile = () => {
	const BACK_END_BASE_URL = import.meta.env.VITE_API_BACK_END_BASE_URL;

	const { authData } = useClientAuth();
	const navigate = useNavigate();

	const handleBackBtn = () => {
		console.log("profile");
		navigate(-1);
	};

	const handleLogout = () => {
		console.log("Logout");
		window.location.href = `${BACK_END_BASE_URL}/auth/logout`;
	};

	const LEFT_ARROW = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			fill="currentColor"
			className="bi bi-arrow-left"
			viewBox="0 0 16 16"
		>
			<path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
		</svg>
	);

	const CAMERA = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="48"
			height="48"
			fill="white"
			className="bi bi-camera"
			viewBox="0 0 16 16"
		>
			<path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
			<path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
		</svg>
	);

	return (
		<div
			className="container-fluid vh-100 d-flex flex-column pd-0"
			style={{ backgroundColor: "#01040F" }}
		>
			{/* Header Section */}
			<div
				className="container-fluid"
				style={{
					height: "14%",
					backgroundColor: "#01040F",
				}}
			>
				<div className="row">
					<i
						className="text-white col-3 align-self-center mt-3 ms-0 ps-0"
						onClick={handleBackBtn}
					>
						{LEFT_ARROW}
					</i>
				</div>
				<div className="text-white col-12 align-self-center h3 row">
					<div className="d-flex justify-content-center mb-2">Personal</div>
					<div className="d-flex justify-content-center mb-2">Information</div>
				</div>
			</div>

			{/* Profile Section */}
			<div
				className="row"
				style={{ height: "15rem", backgroundColor: "#191A1F" }}
			>
				<div className="col-12 d-flex flex-column justify-content-center align-items-center">
					<div className="position-relative">
						<img
							className="img-fluid"
							src="src/assets/userPicture.png"
							alt="userPicture"
							style={{ width: "170px" }}
						/>
						<i className="position-absolute bottom-0 end-0">{CAMERA}</i>
					</div>
				</div>
			</div>

			{/* Content */}
			<div
				className="container-fluid d-flex flex-column align-items-center justify-content-center mt-4"
				style={{ backgroundColor: "#01040F" }}
			>
				{/* Card 1 */}
				<div className="row text-white mb-3 w-75">
					<div
						className={`col-12 d-flex align-items-center p-2 ${style.cardBorder}`}
					>
						<img
							className="me-3"
							src="src/assets/humanIcon.png"
							alt="human-icon"
							style={{ width: "40px" }}
						/>
						<span>{authData?.clientData.clientName}</span>
					</div>
				</div>

				{/* Card 2 */}
				<div className="row text-white my-2 w-75">
					<div
						className={`col-12 d-flex align-items-center p-2 ${style.cardBorder}`}
					>
						<img
							className="me-3"
							src="src/assets/callingIcon.png"
							alt="calling-icon"
							style={{ width: "40px" }}
						/>
						<span>086-377-1558</span>
					</div>
				</div>

				{/* Card 3 */}
				<div className="row text-white my-2 w-75">
					<div
						className={`col-12 d-flex align-items-center p-2 ${style.cardBorder}`}
					>
						<img
							className="me-3"
							src="src/assets/emailIcon.png"
							alt="email-icon"
							style={{ width: "40px" }}
						/>
						<span>david.beck@gmail.com</span>
					</div>
				</div>

				{/* Card 4 */}
				<div className="row text-white my-2 w-75">
					<div
						className={`col-12 d-flex align-items-center p-2 ${style.cardBorder}`}
					>
						<img
							className="me-3"
							src="src/assets/sexIcon.png"
							alt="sex-icon"
							style={{ width: "40px" }}
						/>
						<span>Male</span>
					</div>
				</div>

				{/* Card 5 */}
				<div className="row text-white my-2 w-75">
					<div
						className={`col-12 d-flex align-items-center p-2 ${style.cardBorder}`}
					>
						<img
							className="me-3"
							src="src/assets/mapIcon.png"
							alt="map-icon"
							style={{ width: "40px" }}
						/>
						<span>England, London</span>
					</div>
				</div>

				{/* Logout */}
				<div className="row fixed-bottom mb-5 d-flex justify-content-center">
					<div className="col-12 d-flex justify-content-center">
						<button className="btn w-50">
							<h4 className="text-white" onClick={ handleLogout }>
								Logout
							</h4>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientEditProfile;