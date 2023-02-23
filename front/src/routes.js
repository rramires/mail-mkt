import React from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';


function Dashboard(){
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    )
}


function Login(){
    return (
        <div>
            <h2>Login</h2>
        </div>
    )
}


function SignUp(){
    return (
        <div>
            <h2>User Registration</h2>
        </div>
    )
}


function Contacts(){
    return (
        <div>
            <h2>Contacts List</h2>
        </div>
    )
}


function Messages(){
    return (
        <div>
            <h2>Messages List</h2>
        </div>
    )
}


/**
 * App Routes
 * 
 * 
 * /login                     - Login
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
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/messages" element={<Messages />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}