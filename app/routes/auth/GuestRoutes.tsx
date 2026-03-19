import { USER_TOKEN_NAME } from "constants/index";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useFetcher, useLocation } from "react-router";

export default function GuestRoutes(){
    const location = useLocation();
    const [isAuthenticated , setAuthenticated] = useState<boolean | null> (null);
    useEffect( () => {
        const token = localStorage.getItem(USER_TOKEN_NAME);
        if(token){
            setAuthenticated(true);
        }
    },[location])
    
    if(typeof window !== "undefined"){
        window.addEventListener('storage', (e) => {
            const requiredTokens = [ USER_TOKEN_NAME ];
            if(e.key && requiredTokens.includes(e.key)){
                return <Navigate to="dashboard" replace />
            }
        });
    }
    if(location.pathname === "/" && isAuthenticated){
        return <Navigate to="dashboard" replace />
    }
    return <Outlet/>
}