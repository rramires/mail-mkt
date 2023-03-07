import React from "react";
//
import { 
    NavLink
} from 'react-router-dom';
//
import { 
    Container,
    Navbar,
    Nav } from "react-bootstrap";
//
import withRouter from '../utils/withRouter';
//
import { Header, Logo } from "./styles";
//
import LogoIcon from '../../assets/mm48.png';
//
class HeaderMenu extends React.Component{
    render(){
        return(
            <Header>
                <Navbar>
                    <Container>
                        <Navbar.Brand>
                            <Logo src={LogoIcon} alt="MailMarket Logo Icon" />
                        </Navbar.Brand>
                        <Nav>
                            <NavLink to="/messages">Messages</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink to="/contacts">Contacts</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink to="/logout">Logout</NavLink>           
                        </Nav>
                    </Container>
                </Navbar>
            </Header>
        )
    }
}
//
export default withRouter(HeaderMenu);