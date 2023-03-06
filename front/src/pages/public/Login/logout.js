import React from "react";
//
import withRouter from '../../../shared/utils/withRouter';
//
import { logout } from '../../services/auth';
//
class Logout extends React.Component{
    // call logout
    componentDidMount(){
        logout();
        setTimeout(() => {
            this.props.navigate('/login');
        }, 1000);
    }
    //
    render(){
        return(
            <div>
                <h2>Logout</h2>
            </div>
        )
    }
}
//
export default withRouter(Logout);