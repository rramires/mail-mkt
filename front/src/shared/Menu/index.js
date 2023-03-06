import React from "react";
//
import { 
    Link
} from 'react-router-dom';
//
class Menu extends React.Component{
    render(){
        return(
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
}
//
export default Menu;