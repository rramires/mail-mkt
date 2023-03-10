import React from "react";
//
import HeaderMenu from "../../../shared/Header/HeaderMenu";

class ContactAdd extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <HeaderMenu />
                <h2>Add Contact</h2>
            </div>
        )
    }
}
//
export default ContactAdd;