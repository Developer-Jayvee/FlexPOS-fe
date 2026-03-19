import { USER_TOKEN_NAME } from "constants/index";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router"


export default function AuthRoutes(){
    const location = useLocation();
    const [ isAuthenticatied , setAuthenticated] = useState<boolean | null>(null);

    useEffect( () => {
        const token = localStorage.getItem(USER_TOKEN_NAME);
        setAuthenticated( !!token );
    },[location]);
    
    if(isAuthenticatied === null){
        return null;
    }
    
    return isAuthenticatied ?  <Outlet/> :  <Navigate to="/" replace />;
}