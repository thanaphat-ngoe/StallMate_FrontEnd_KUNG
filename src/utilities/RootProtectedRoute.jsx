import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useCookieAuth } from "../hooks/useCookieAuth";
import axios from "axios";
import Loading from "../Loading";

const BACK_END_BASE_URL = import.meta.env.VITE_API_BACK_END_BASE_URL;

const API_ENDPOINTS = {
	Customer: `${BACK_END_BASE_URL}/dashboard/customer`,
	StallOwner: `${BACK_END_BASE_URL}/dashboard/stallowner`,
};

const RootProtectedRoute = ({ children }) => {
	const { getRole } = useCookieAuth(); 
	const [isAuthenticated, setIsAuthenticated] = useState(null); 
	const [redirectPath, setRedirectPath] = useState(null);

	const userAuth = async (role) => {
		try {
			const endpoint = API_ENDPOINTS[role];
			if (!endpoint) throw new Error("Invalid role");

			const response = await axios.get(endpoint, { withCredentials: true });
			return response.data.userType === role;
		} catch (err) {
			return false;
		}
	};

	useEffect(() => {
		const checkAuth = async () => {
			const role = getRole(); 
			if (role) {
				const authStatus = await userAuth(role); 
				if (authStatus) {
					setIsAuthenticated(true);
					setRedirectPath(role === "Customer" ? "/clientHome" : "/ownerProfile");
				} else {
					setIsAuthenticated(false); 
				}
			} else {
				setIsAuthenticated(false); 
			}
		};

		checkAuth();
	}, []);

	if (isAuthenticated === null) {
		return < Loading />; 
	}

	if (isAuthenticated && redirectPath) {
		return <Navigate to={redirectPath} replace />;
	}

	return isAuthenticated === false ? children : null;
};

export default RootProtectedRoute;