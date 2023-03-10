import React from "react";
//
import { 
    useParams,

} from 'react-router-dom';
//
import HeaderMenu from "../../../shared/Header/HeaderMenu";
//
function MessageWrapper(){
    // params
    let { messageId } = useParams();
    return (
        <div>
            <HeaderMenu />
            <h2>Message: {messageId}</h2>
        </div>
    )
}
//
class MessageDeail extends React.Component{
    render(){
        return <MessageWrapper />
    }
}
//
export default MessageDeail;