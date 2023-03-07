import React from "react";
//
import { 
    useParams,

} from 'react-router-dom';
//
import HeaderMenu from "../../../shared/Header";
//
function ContactWrapper(){
    // params
    let { contactId } = useParams();
    return (
        <div>
            <HeaderMenu />
            <h2>Contact: {contactId}</h2>
        </div>
    )
}
//
class Contact extends React.Component{
    render(){
        return <ContactWrapper />
    }
}
//
export default Contact;