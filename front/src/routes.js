import React from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
//
// public pages
import Login from './pages/public/Login';
import Logout from './pages/public/Login/logout';
import SignUp from './pages/public/SignUp';
//
// private pages
import Dashboard from './pages/private/Dashboard';
import Messages from './pages/private/Messages';
import Message from './pages/private/Messages/message';
import Contacts from './pages/private/Contacts';
import Contact from "./pages/private/Contacts/contact";


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
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/logout" element={<Logout />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/contacts" element={<Contacts />} />
                <Route exact path="/messages" element={<Messages />} />
                <Route path="/contacts/:contactId" element={<Contact />} />
                <Route path="/messages/:messageId" element={<Message />} />
            </Routes>
        </BrowserRouter>
    )
}