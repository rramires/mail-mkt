import React from "react";
import { 
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
    useLocation
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
    // paths
    let { pathname } = useLocation();
    return (
        <div>
            <Menu />
            <h2>Contacts List</h2>
            <ul>
                <li>
                    <Link to={`${pathname}/1`}>Contato A</Link>
                </li>
                <li>
                    <Link to={`${pathname}/2`}>Contato B</Link>
                </li>
                <li>
                    <Link to={`${pathname}/3`}>Contato C</Link>
                </li>
            </ul>
        </div>
    )
}


function Messages(){
    // paths
    let { pathname } = useLocation();
    return (
        <div>
            <Menu />
            <h2>Messages List</h2>
            <ul>
                <li>
                    <Link to={`${pathname}/1`}>Message A</Link>
                </li>
                <li>
                    <Link to={`${pathname}/2`}>Message B</Link>
                </li>
                <li>
                    <Link to={`${pathname}/3`}>Message C</Link>
                </li>
            </ul>
        </div>
    )
}


function Contact(){
    // params
    let { contactId } = useParams();
    return (
        <div>
            <Menu />
            <h2>Contact: {contactId}</h2>
        </div>
    )
}


function Message(){
    // params
    let { messageId } = useParams();
    return (
        <div>
            <Menu />
            <h2>Message: {messageId}</h2>
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