import React from "react";
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
//
import IsAuth from "./isAuth";
//
// public pages
import Login from '../pages/public/Login';
import SignUp from '../pages/public/SignUp';
import NoMatch from "../pages/public/NoMatch";
// private pages
import Logout from '../pages/public/Login/logout';
import Dashboard from '../pages/private/Dashboard';
import Messages from '../pages/private/Messages';
import Message from '../pages/private/Messages/message';
import Contacts from '../pages/private/Contacts';
import Contact from "../pages/private/Contacts/contact";


/**
 * App Routes
 * 
 * 
 * /login                      - Login User
 * /logout                     - Logout User
 * /signup                     - User Registration
 * 
 * /                           - Dashboard
 * /contacts                   - Contacts List
 * /contacts/add               - Add Contact
 * /contacts/:contactId        - Contact Details
 * 
 * /messages                   - Messages List
 * /messages/add               - Add Message
 * /messages/:messageId        - Message Details
 * 
 */
export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                {/* Private routes */}
                <Route path="/logout" element={<IsAuth><Logout /></IsAuth>} />
                <Route path="/" element={<IsAuth><Dashboard /></IsAuth>} />
                <Route path="/contacts" element={<IsAuth><Contacts /></IsAuth>} />
                <Route path="/messages" element={<IsAuth><Messages /></IsAuth>} />
                <Route path="/contacts/:contactId" element={<IsAuth><Contact /></IsAuth>} />
                <Route path="/messages/:messageId" element={<IsAuth><Message /></IsAuth>} />
                {/* Public routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}
