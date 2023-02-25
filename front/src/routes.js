import React from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';


function Menu(){
    return (
        <ul>
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/messages">Messages</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
            <li>
                <Link to="/signup">SignUp</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>             
        </ul>
    )
}


function Dashboard(){
    return (
        <div>
            <Menu />
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


function Logout(){
    return (
        <div>
            <h2>Logout</h2>
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
            <Menu />
            <h2>Contacts List</h2>
        </div>
    )
}


function Messages(){
    return (
        <div>
            <Menu />
            <h2>Messages List</h2>
        </div>
    )
}


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
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/messages" element={<Messages />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}