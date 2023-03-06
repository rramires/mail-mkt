import React from "react";
//
import { 
    useParams,

} from 'react-router-dom';
//
import Menu from "../../../shared/Menu";
//
function MessageWrapper(){
    // params
    let { messageId } = useParams();
    return (
        <div>
            <Menu />
            <h2>Message: {messageId}</h2>
        </div>
    )
}
//
class Message extends React.Component{
    render(){
        return <MessageWrapper />
    }
}
//
export default Message;