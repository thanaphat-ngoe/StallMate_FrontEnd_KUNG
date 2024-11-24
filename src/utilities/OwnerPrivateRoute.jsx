import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useOwnerAuth } from './OwnerAuthContext';
import { useCookieAuth } from "../hooks/useCookieAuth";
import axios from 'axios';
import Loading from "../Loading";

const BACK_END_BASE_URL = import.meta.env.VITE_API_BACK_END_BASE_URL;

const OwnerPrivateRoute = () => {
    const { getRole } = useCookieAuth();
    const { setAuthData } = useOwnerAuth();
    const [ isAuthenticated, setIsAuthenticated ] = useState(null);
    const role = getRole(); 
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${BACK_END_BASE_URL}/dashboard/stallowner`, { withCredentials: true, headers: { "Cache-Control": "no-store", Pragma: "no-cache" } });
                if (response.status === 200 && response.data.ownerID && response.data.userType === role) {
                    setIsAuthenticated(true);
                    setAuthData({ ownerData: response.data, ownerCurrentPath: location.pathname });
                } else {
                    setIsAuthenticated(false);
                }
                // console.log(response.status);
                // console.log(response.data);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, [location.pathname]);

    // console.log('isAuthenticated:', isAuthenticated);
    
    if (isAuthenticated === null) {
        return <Loading/>;
    }

    return isAuthenticated ? (<Outlet/>) : (<Navigate to="/" replace state={{ from: location }}/>);
};

export default OwnerPrivateRoute;