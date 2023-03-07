import React from "react";
import { useLocation, Navigate } from "react-router-dom";
//
import { isAuthenticated } from "../pages/services/auth";


/**
 * If not authenticated, redirect to login
 */
function IsAuth( { children } ) {
    //
    const location = useLocation();
    // check id token exists
    if (!isAuthenticated()){
      return <Navigate to="/login" replace state={ { from: location } } />;
    }
    else{
      return children;
    }
}
// 
export default IsAuth