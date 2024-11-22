import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useOwnerAuth } from './OwnerAuthContext';
import axios from 'axios';
import Loading from "../Loading";

const OwnerPrivateRoute = () => {
    const BACK_END_BASE_URL = import.meta.env.VITE_API_BACK_END_BASE_URL;
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const { setAuthData } = useOwnerAuth();
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${BACK_END_BASE_URL}/dashboard/stallowner`, { withCredentials: true });
                if (response.status === 200 && response.data.ownerID) {
                    setIsAuthenticated(true);
                    setAuthData({ ownerData: response.data, ownerCurrentPath: location.pathname });
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

export default OwnerPrivateRoute;