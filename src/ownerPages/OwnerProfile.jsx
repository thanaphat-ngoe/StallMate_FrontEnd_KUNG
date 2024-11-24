import { useNavigate } from "react-router-dom";
import { useOwnerAuth } from "../utilities/OwnerAuthContext";
import { useState, useEffect } from "react";
import style from "./OwnerProfile.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PicturePlaceHolder from '../assets/picplace.svg'
import axios from "axios";

export const STAR_ICON = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="30"
		height="30"
		fill="#FFD700"
		className="bi bi-star-fill"
		viewBox="0 0 16 16"
	>
		<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
	</svg>
);

export const PEN_ICON = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="25"
		height="25"
		fill="currentColor"
		className="bi bi-pencil-square"
		viewBox="0 0 16 16"
	>
		<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
		<path
			fillRule="evenodd"
			d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
		/>
	</svg>
);

export const STALL_ICON = (
	<svg
		width="42"
		height="42"
		viewBox="0 0 42 42"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0_921_2721)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.7031 0.420898C6.135 0.420898 5.61823 0.749749 5.37765 1.2644L0.988113 10.6534C0.878206 10.8885 0.834553 11.1442 0.855483 11.3949H0.850403V14.1615C0.850403 15.6937 1.51294 17.163 2.69226 18.2464C3.87158 19.3298 5.47109 19.9384 7.1389 19.9384H8.01928C9.68709 19.9384 11.2866 19.3298 12.4659 18.2464C12.9447 17.8066 13.3383 17.3031 13.637 16.7576C14.0076 16.2607 14.61 16.2642 14.9578 16.7192C15.2589 17.2795 15.6597 17.7963 16.1497 18.2464C17.329 19.3298 18.9285 19.9384 20.5963 19.9384H22.1685C23.8363 19.9384 25.4358 19.3298 26.6151 18.2464C27.0732 17.8255 27.4534 17.3464 27.747 16.828C28.1306 16.2307 28.8028 16.2433 29.1515 16.8007C29.4471 17.3296 29.8325 17.8182 30.2987 18.2464C31.4781 19.3298 33.0776 19.9384 34.7454 19.9384H35.5314C37.1992 19.9384 38.7987 19.3298 39.9781 18.2464C41.1574 17.163 41.8199 15.6937 41.8199 14.1615V11.3949H41.8144C41.8352 11.1442 41.7915 10.8885 41.6815 10.6534L37.2922 1.2644C37.0514 0.749749 36.5349 0.420898 35.9666 0.420898H6.7031ZM3.7768 38.464V23.0376C7.25385 24.1867 11.3997 23.6748 14.2488 21.4704C18.0446 24.4072 24.6325 24.4072 28.4283 21.4704C31.2896 23.6842 35.4284 24.1868 38.8935 23.0106V38.464C38.8935 39.2401 38.5851 39.9846 38.0364 40.5333C37.4877 41.0823 36.7432 41.3904 35.9671 41.3904H32.2931V30.3C32.2931 30.1297 32.2193 29.9664 32.0879 29.8458C31.9565 29.7255 31.7786 29.6578 31.5928 29.6578H25.762C25.5762 29.6578 25.3981 29.7255 25.2668 29.8458C25.1355 29.9664 25.0618 30.1297 25.0618 30.3V41.3904H6.70319C5.92705 41.3904 5.18273 41.0823 4.63391 40.5333C4.08512 39.9846 3.7768 39.2401 3.7768 38.464ZM8.17201 31.9115V28.2217C8.17201 27.4136 8.82711 26.7585 9.63521 26.7585H18.4554C19.2635 26.7585 19.9186 27.4136 19.9186 28.2217V31.9115C19.9186 32.7195 19.2635 33.3747 18.4554 33.3747H9.63521C8.82711 33.3747 8.17201 32.7195 8.17201 31.9115Z"
				fill="white"
			/>
		</g>
		<defs>
			<clipPath id="clip0_921_2721">
				<rect
					width="40.9695"
					height="40.9695"
					fill="white"
					transform="translate(0.850403 0.420898)"
				/>
			</clipPath>
		</defs>
	</svg>
);

export const QUEUE_ICON = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="50"
		height="50"
		fill="white"
		className="bi bi-card-list"
		viewBox="0 0 16 16"
	>
		<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
		<path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
	</svg>
);

export const HISTORY_ICON = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="45"
		height="50"
		fill="white"
		className="bi bi-clipboard-data-fill"
		viewBox="0 0 16 16"
	>
		<path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
		<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" />
	</svg>
);  

const OwnerProfile = () => {
	const BACK_END_BASE_URL = import.meta.env.VITE_API_BACK_END_BASE_URL;
  const { authData } = useOwnerAuth();
  const ownerID = authData.ownerData.ownerID;
  const navigate = useNavigate();
  console.log(ownerID);
  const handleQueue = () => {

    navigate('/ownerOrderQueue') 
  }

	const handleChangeName = () => { navigate("/ownerEditProfile"); };

	const handleMenuEdit = () => {
		navigate("/ownerMenu");
	};
	const handleOrderQueue = () => {
		navigate("/ownerOrderQueue");
	};
	const handleWallet = () => {
		console.log("wallet");
	};

	const handleHistory = () => {
		navigate("/ownerHistory")
	}
	
	
	const [profilePresence, setProfilePresence] = useState(true);

	const [profile, setProfile] = useState({
		fullName: "", 
		bio: "", 
		experienceYears: 0, 
		profilePhoto: null, 
		restaurantName: "", 
		restaurantPhoto: null, 
		location: {
			address: "", 
			city: "", 
			state: "" 
		},
		openingHours: [
			{ weekday: "Monday", open_time: "", close_time: "" },
			{ weekday: "Tuesday", open_time: "", close_time: "" },
			{ weekday: "Wednesday", open_time: "", close_time: "" },
			{ weekday: "Thursday", open_time: "", close_time: "" },
			{ weekday: "Friday", open_time: "", close_time: "" },
			{ weekday: "Saturday", open_time: "", close_time: "" },
			{ weekday: "Sunday", open_time: "", close_time: "" }
		],
		contact: {
			email: "", // Contact email
			phone: "" // Contact phone number
		}
	});
	const [selectedDay, setSelectedDay] = useState(profile.openingHours[0]?.weekday || "Monday");

	/*useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/dashboard/stallowner/${ownerID}/profile`, { withCredentials: true });
                if (response.status === 200) {
                    setProfile(response.data);
					setProfilePresence(true);
					setLoading(false);
					console.log(response.data);
                } else {
					setProfilePresence(false);
                }
				console.log(response.status);
            } catch (error) {
                console.log(error)
				setProfilePresence(false);
            }
        };
        checkAuth();
    }, []);*/

	const handleNestedInputChange = (event, section) => {
		const { name, value } = event.target;
		setProfile((prevProfile) => ({
			...prevProfile,
			[section]: {
				...prevProfile[section],
				[name]: value,
			},
		}));
	};
	const handleInputChange = (e) => {
		const { name, value } = e.target;
	  
		setProfile((prevProfile) => ({
		  ...prevProfile,
		  [name]: value,
		}));
	  };
	  
	
	const handleOpeningHoursChange = (event, selectedDay) => {
		const { name, value } = event.target;
	
		setProfile((prevProfile) => {
			const updatedOpeningHours = prevProfile.openingHours.map((entry) => {
				if (entry.weekday === selectedDay) {
					return { ...entry, [name]: value };
				}
				return entry;
			});
	
			return {
				...prevProfile,
				openingHours: updatedOpeningHours,
			};
		});
	
		console.log("Updated time for", selectedDay, name, value);
	};
	

	
	
	

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!profile.fullName || !profile.profilePhoto) {
			alert('Please fill in all the profile details.');
			return;
		}

		console.log(profile);

		const formData = new FormData();

		// Basic Profile Details
		formData.append('fullName', profile.fullName);
		formData.append('bio', profile.bio);
		formData.append('experienceYears', profile.experienceYears);

		// Add Profile Photo File
		if (profile.profilePhoto instanceof File) {
			formData.append('profilePhoto', profile.profilePhoto);
		}

		// Restaurant Details
		formData.append('restaurantName', profile.restaurantName);

		// Add Restaurant Photo File
		if (profile.restaurantPhoto instanceof File) {
			formData.append('restaurantPhoto', profile.restaurantPhoto);
		}

		// Location
		formData.append(
			'location',
			JSON.stringify({
				address: profile.location.address,
				city: profile.location.city,
				state: profile.location.state,
			})
		);

		// Opening Hours
		formData.append('openingHours', 
			JSON.stringify(profile.openingHours.map((day) => ({
				weekday: day.weekday,
				open_time: day.open_time,
				close_time: day.close_time,
			})))
		);

		// Contact Info
		formData.append(
			'contact',
			JSON.stringify({
				email: profile.contact.email,
				phone: profile.contact.phone,
			})
		);

		console.log('FormData contents:');
		for (let pair of formData.entries()) {
			console.log(pair[0] + ': ' + pair[1]);
		}

		try {
			const response = await axios.put(
				`${BACK_END_BASE_URL}/dashboard/stallowner/${ownerID}/profile`, 
				formData, 
				{ 
					withCredentials: true, 
					headers: { 'Content-Type': 'multipart/form-data' } 
				}
			);
			console.log('Profile updated successfully:', response.data);
			alert('Profile updated successfully!');
		
			setProfile({
				fullName: "", 
				bio: "", 
				experienceYears: 0, 
				profilePhoto: null, 
				restaurantName: "", 
				restaurantPhoto: null, 
				location: {
					address: "", 
					city: "", 
					state: "" 
				},
				openingHours: [
					{ weekday: "Monday", open_time: "", close_time: "" },
					{ weekday: "Tuesday", open_time: "", close_time: "" },
					{ weekday: "Wednesday", open_time: "", close_time: "" },
					{ weekday: "Thursday", open_time: "", close_time: "" },
					{ weekday: "Friday", open_time: "", close_time: "" },
					{ weekday: "Saturday", open_time: "", close_time: "" },
					{ weekday: "Sunday", open_time: "", close_time: "" }
				],
				contact: {
					email: "", 
					phone: "" 
				}
			});
		} catch (error) {
			console.error('Error updating profile:', error);
			console.error('Error response:', error.response?.data);
			console.error('Error status:', error.response?.status);
			alert(`Failed to update profile: ${error.response?.data?.error || error.message}`);
		}
};
	

	const handleAddResImageClick = () => {
		document.getElementById('fileInputAddRes').click();
	};
	
	const handleAddProImageClick = () => {
		document.getElementById('fileInputAddPro').click();
	};
	
	const handleAddResFileChange = (e) => {
		try {
			const file = e.target.files[0];
			if (file) {
				setProfile((prevProfile) => ({
					...prevProfile,
					restaurantPhoto: file, 
				}));
			}
		} catch (error) {
			console.error('Error creating file URL:', error);
		}
	};
	
	const handleAddProFileChange = (e) => {
		try {
			const file = e.target.files[0];
			if (file) {
				setProfile((prevProfile) => ({
					...prevProfile,
					profilePhoto: file,
				}));
			}
		} catch (error) {
			console.error('Error creating file URL:', error);
		}
	};
	

	const handleDayChange = (e) => {
		const newDay = e.target.value;
		console.log("Selected day changing to:", newDay);
		setSelectedDay(newDay); 
	};
	

	return (
		profilePresence ? (
			<div className="container-fluid">
				<div className="container-fluid mt-5">
					<div className={`row ${style.content}`}>
						<div className="col-7 d-flex flex-column justify-content-center">
							<div
								className="container d-flex justify-content-center align-items-center border rounded-pill mb-2"
								style={{ height: "45px" }}
							>
								<p className="mb-0 me-3">{authData.ownerData.ownerName}</p>
								{/* {isLoading ? "Loading..." : userName} */}
								<i onClick={handleChangeName}>{PEN_ICON}</i>
							</div>
							<div
								className="container d-flex justify-content-center align-items-center border-0 rounded-pill my-2"
								style={{ height: "45px", backgroundColor: "#2B964F" }}
							>
								{STAR_ICON}
								<div className="ms-2">10 Reviews</div>
							</div>
						</div>

						<div className="col-5 border-0">
							<img
								className="img-fluid"
								src="src/assets/userPicture.png"
								alt="user-picture"
							/>
						</div>
					</div>
				</div>

				<div className="container-fluid mt-5 ">
					<div className="row d-flex justify-content-around">
						<div
							onClick={handleMenuEdit}
							className="col d-flex mx-1 flex-column justify-content-center border-0 align-items-center"
							style={{
								height: "120px",
								backgroundColor: "black",
								borderRadius: "15px",
							}}
						>
							<i className="mt-3">{STALL_ICON}</i>
							<p className="text-white fw-bold mt-2">Your Stall</p>
						</div>

						<div
							onClick={handleQueue}
							className="col d-flex mx-1 flex-column justify-content-center border-0 align-items-center"
							style={{
								height: "120px",
								backgroundColor: "black",
								borderRadius: "15px",
							}}
						>
							<i className="mt-3">{QUEUE_ICON}</i>
							<p className="text-white fw-bold ">Queue</p>
						</div>
						<div
							onClick={handleHistory}
							className="col d-flex mx-1 flex-column justify-content-center border-0 align-items-center"
							style={{
								height: "120px",
								backgroundColor: "black",
								borderRadius: "15px",
							}}
						>
							<i className="mt-3">{HISTORY_ICON}</i>
							<p className="text-white fw-bold ">History</p>
						</div>
					</div>
				</div>

				<div
					className={`container-fluid my-3 pt-2 bg-black  text-white  mx-0 pb-2 border-0 rounded ${style.mockup}`}
				>
					<h5>General</h5>
					<div className="d-flex justify-content-between">
						<span>
							<p>Favorites</p>
						</span>
						<span>
							<p>&gt;</p>
						</span>
					</div>
					<hr />

					<div className="d-flex justify-content-between">
						<span>
							<p>Settings</p>
						</span>
						<span>
							<p>&gt;</p>
						</span>
					</div>

					<hr />

					<div className="d-flex justify-content-between">
						<span>
							<p>Language</p>
						</span>
						<span>
							<p>&gt;</p>
						</span>
					</div>
					<hr />
					<div className="d-flex justify-content-between">
						<span>
							<p>Safety Setting</p>
						</span>
						<span>
							<p>&gt;</p>
						</span>
					</div>
					<hr />

					<div className="d-flex justify-content-between">
						<span>
							<p>Saved Places</p>
						</span>
						<span>
							<p>&gt;</p>
						</span>
					</div>

					<hr />
					<h5>Support</h5>
					<div className="d-flex justify-content-between">
						<span>
							<p>Help center</p>
						</span>
						<span>
							<p>&gt;</p>
						</span>
					</div>

					<hr />

					<div className="d-flex justify-content-between">
						<span>
							<p>Share Feedback</p>
						</span>
						<span>
							<p>&gt;</p>
						</span>
					</div>
					<hr />
				</div>
			</div>
		) : (
			<div>
				<div style={{ marginBottom: "5vw" }}></div>
				<div
					className="row"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "100vw",
						margin: "0 auto"
					}}
				>
					<form
						onSubmit={handleSubmit}
						className="d-flex flex-column justify-content-center align-items-center"
						style={{ position: "relative", width: "100vw" }}
						>
						{/* Owner Profile */}
						<h4 className="text-white" style={{ marginBottom: "4vw", fontSize: "5vw" }}>
							Owner Profile
						</h4>

						{/* Image Upload */}
						<div
							style={{
							position: "relative",
							display: "flex",
							justifyContent: "center",
							marginBottom: "3vw",
							}}
						>
							<img
							src={profile.profilePhoto || PicturePlaceHolder}
							alt="Owner Profile"
							style={{
								width: "20vw",
								borderRadius: "10%",
								cursor: "pointer",
							}}
							onClick={handleAddProImageClick}
							/>
							<input
							id="fileInputAddPro"
							type="file"
							accept="image/*"
							style={{ display: "none" }}
							onChange={handleAddProFileChange}
							/>
						</div>

						{/* Full Name */}
						<div className="input-group d-flex justify-content-center align-items-center" style={{ marginBottom: "3vw" }}>
							<input
							type="text"
							name="fullName"
							placeholder="Full Name"
							value={profile.fullName}
							onChange={handleInputChange}
							required
							style={{
								width: "90vw",
								height: "12vw",
								background: "#01040F",
								border: "none",
								color: "white",
								fontSize: "4vw",
								borderRadius: "2vw",
								padding: "1vw",
							}}
							/>
						</div>

						{/* Bio */}
						<div className="input-group d-flex justify-content-center align-items-center" style={{ marginBottom: "3vw" }}>
							<input
							type="text"
							name="bio"
							placeholder="Bio"
							value={profile.bio}
							onChange={handleInputChange}
							required
							style={{
								width: "90vw",
								height: "12vw",
								background: "#01040F",
								border: "none",
								color: "white",
								fontSize: "4vw",
								borderRadius: "2vw",
								padding: "1vw",
							}}
							/>
						</div>

						{/* Experience Years */}
						<div className="input-group d-flex justify-content-center align-items-center" style={{ marginBottom: "3vw" }}>
							<input
							type="number"
							name="experienceYears"
							placeholder="Experience Years"
							value={profile.experienceYears}
							onChange={handleInputChange}
							required
							style={{
								width: "90vw",
								height: "12vw",
								background: "#01040F",
								border: "none",
								color: "white",
								fontSize: "4vw",
								borderRadius: "2vw",
								padding: "1vw",
							}}
							/>
						</div>

						{/* Restaurant Details */}
						<h4 className="text-white" style={{ marginBottom: "4vw", fontSize: "5vw" }}>
							Restaurant Details
						</h4>

						{/* Restaurant Photo */}
						<div
							style={{
							position: "relative",
							display: "flex",
							justifyContent: "center",
							marginBottom: "3vw",
							}}
						>
							<img
							src={profile.restaurantPhoto || PicturePlaceHolder}
							alt="Restaurant"
							style={{
								width: "20vw",
								borderRadius: "10%",
								cursor: "pointer",
							}}
							onClick={handleAddResImageClick}
							/>
							<input
							id="fileInputAddRes"
							type="file"
							accept="image/*"
							style={{ display: "none" }}
							onChange={handleAddResFileChange}
							/>
						</div>

						{/* Restaurant Name */}
						<div className="input-group d-flex justify-content-center align-items-center" style={{ marginBottom: "3vw" }}>
							<input
							type="text"
							name="restaurantName"
							placeholder="Restaurant Name"
							value={profile.restaurantName}
							onChange={handleInputChange}
							required
							style={{
								width: "90vw",
								height: "12vw",
								background: "#01040F",
								border: "none",
								color: "white",
								fontSize: "4vw",
								borderRadius: "2vw",
								padding: "1vw",
							}}
							/>
						</div>

						{/* Location */}
						<h4 className="text-white" style={{ marginBottom: "4vw", fontSize: "5vw" }}>
							Location
						</h4>
						{["address", "city", "state"].map((field, index) => (
							<div className="input-group d-flex justify-content-center align-items-center" style={{ marginBottom: "3vw" }} key={index}>
							<input
								type="text"
								name={field}
								placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
								value={profile.location[field]}
								onChange={(event) => handleNestedInputChange(event, "location")}
								required
								style={{
								width: "90vw",
								height: "12vw",
								background: "#01040F",
								border: "none",
								color: "white",
								fontSize: "4vw",
								borderRadius: "2vw",
								padding: "1vw",
								}}
							/>
							</div>
						))}

						{/* Opening Hours */}
						<h4 className="text-white" style={{ marginBottom: "4vw", fontSize: "5vw" }}>
							Opening Hours
						</h4>
						<div className="input-group d-flex justify-content-center align-items-center" style={{ marginBottom: "3vw" }}>
							<span
								className="d-flex justify-content-center align-items-center"
								style={{
									background: "#01040F",
									border: "none",
									height: "15vw",
									width: "15vw",
									marginTop: "-1vw",
									borderRadius: "2vw 0 0 2vw",
								}}
							>
								<p className="text-white" style={{ fontSize: "3.5vw", margin: 0 }}>
									Day
								</p>
							</span>
							<select
								className="text-white"
								value={selectedDay}
								onChange={handleDayChange}
								style={{
									width: "75vw",
									height: "15vw",
									marginBottom: "1vw",
									background: "#01040F",
									border: "none",
									fontSize: "4vw",
									borderRadius: "0 2vw 2vw 0",
								}}
							>
								{profile.openingHours.map((entry) => (
									<option key={entry.weekday} value={entry.weekday}>
										{entry.weekday}
									</option>
								))}
							</select>
						</div>

						{/* Time Inputs */}
						{["open_time", "close_time"].map((timeField, index) => (
						<div key={index} className="input-group d-flex justify-content-center align-items-center" style={{ marginBottom: "3vw" }}>
							<span
							className="d-flex justify-content-center align-items-center"
							style={{
								background: "#01040F",
								border: "none",
								height: "15vw",
								width: "15vw",
								marginTop: "-1vw",
								borderRadius: "2vw 0 0 2vw",
							}}
							>
							<p className="text-white" style={{ fontSize: "3.5vw", margin: 0 }}>
								{timeField === "open_time" ? "Open" : "Close"}
							</p>
							</span>
							<input
							className="text-white"
							type="time"
							name={timeField}
							value={profile.openingHours.find(
								(entry) => entry.weekday === selectedDay
							)?.[timeField] || ""}
							onChange={(event) => handleOpeningHoursChange(event, selectedDay)}
							style={{
								width: "75vw",
								height: "15vw",
								marginBottom: "1vw",
								background: "#01040F",
								border: "none",
								fontSize: "4vw",
								borderRadius: "0 2vw 2vw 0",
							}}
							/>
						</div>
						))}


						{/* Contact */}
						<h4 className="text-white" style={{ marginBottom: "4vw", fontSize: "5vw" }}>
							Contact Information
						</h4>
						{["email", "phone"].map((field, index) => (
							<div className="input-group d-flex justify-content-center align-items-center" style={{ marginBottom: "3vw" }} key={index}>
							<input
								type={field === "email" ? "email" : "text"}
								name={field}
								placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
								value={profile.contact[field]}
								onChange={(event) => handleNestedInputChange(event, "contact")}
								required
								style={{
								width: "90vw",
								height: "12vw",
								background: "#01040F",
								border: "none",
								color: "white",
								fontSize: "4vw",
								borderRadius: "2vw",
								padding: "1vw",
								}}
							/>
							</div>
						))}

						<button
							type="submit"
							className="btn btn-primary"
							style={{
							background: "#016B3D",
							fontSize: "4vw",
							padding: "1vw",
							width: "90vw",
							height: "12vw",
							borderRadius: "3vw",
							marginTop: "3vw",
							}}
						>
							Submit
						</button>
						</form>



				</div>
			</div>

		)
	);
};

export default OwnerProfile;