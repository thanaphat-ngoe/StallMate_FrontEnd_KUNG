import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useClientAuth } from './ClientAuthContext';
import axios from 'axios';
import Loading from "../Loading";

const ClientPrivateRoute = () => {
    const BACK_END_BASE_URL = import.meta.env.VITE_API_BACK_END_BASE_URL;
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const { setAuthData } = useClientAuth();
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${BACK_END_BASE_URL}/dashboard/customer`, { withCredentials: true });
                if (response.status === 200 && response.data.clientID) {
                    setIsAuthenticated(true);
                    setAuthData({ clientData: response.data, clientCurrentPath: location.pathname });
                } else {
                    setIsAuthenticated(false);
                }
                console.log(response.status);
                console.log(response.data);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, [location.pathname]);

    console.log(isAuthenticated);
    
    if (isAuthenticated === null) {
        return <Loading/>;
    }

    return isAuthenticated ? (<Outlet/>) : (<Navigate to="/" replace state={{ from: location }}/>);
};

export default ClientPrivateRoute;