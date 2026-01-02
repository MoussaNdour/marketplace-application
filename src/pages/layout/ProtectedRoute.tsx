

import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {isAuth} from "../../services/auth";


const ProtectedRoute = ({children}) => {

    const navigate=useNavigate()

    useEffect(() => {
        if(!isAuth())
        {
            localStorage.clear()
            navigate("/login")
        }
    }, []);


    return (
        children
    );
};

export default ProtectedRoute;
