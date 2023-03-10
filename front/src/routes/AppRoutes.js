import React from "react";
import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
//
import IsAuth from "./IsAuth";
//
// public pages
import Login from '../pages/public/Authorization/Login';
import Registration from '../pages/public/SignUp/Registration';
import NoMatch from "../pages/public/Errors/NoMatch";
// private pages
import Logout from '../pages/public/Authorization/Logout';
import DashboardHome from '../pages/private/Dashboard/DashboardHome';
import MessagesList from '../pages/private/Messages/MessagesList';
import MessageDetail from '../pages/private/Messages/MessageDetail';
import ContactsList from '../pages/private/Contacts/ContactsList';
import ContactAdd from '../pages/private/Contacts/ContactAdd';
import ContactDetail from "../pages/private/Contacts/ContactDetail";


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
                <Route path="/" element={<IsAuth><DashboardHome /></IsAuth>} />
                <Route path="/messages" element={<IsAuth><MessagesList /></IsAuth>} />
                <Route path="/messages/:messageId" element={<IsAuth><MessageDetail /></IsAuth>} />
                <Route path="/contacts" element={<IsAuth><ContactsList /></IsAuth>} />
                <Route path="/contacts/add" element={<IsAuth><ContactAdd /></IsAuth>} />
                <Route path="/contacts/:contactId" element={<IsAuth><ContactDetail /></IsAuth>} />
                {/* Public routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Registration />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}
