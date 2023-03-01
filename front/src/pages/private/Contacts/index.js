import React from "react";
//
import {
    Link,
    useLocation
} from 'react-router-dom';
//
import Menu from "../../public/Menu";
//
function ContactWrapper(){
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
//
class Contacts extends React.Component{
    render(){
        return <ContactWrapper />
    }
}
//
export default Contacts;