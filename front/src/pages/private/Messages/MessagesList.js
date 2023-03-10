import React from "react";
//
import {
    Link,
    useLocation
} from 'react-router-dom';
//
import HeaderMenu from "../../../shared/Header/HeaderMenu";
//
function MessagesWrapper(){
    // paths
    let { pathname } = useLocation();
    return (
        <div>
            <HeaderMenu />
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
//
class MessagesList extends React.Component{
    render(){
        return <MessagesWrapper />
    }
}
//
export default MessagesList;