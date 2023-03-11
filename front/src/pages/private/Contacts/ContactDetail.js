import React from "react";
//
import {
    Link,
    useLocation
} from 'react-router-dom';
//
import { 
    Container,
    Row,
    Col } from "react-bootstrap";      
//
import { PageContent } from '../../../shared/Styles/commons';
//
import HeaderMenu from "../../../shared/Header/HeaderMenu";
import withRouter from '../../../shared/utils/withRouter';
//
import ContactsService from '../../services/ContactsService';
//
//
function RenderEmpty(){
    return(
        <Row>
            <Col>
                <h6>No Contacts found...</h6>
            </Col>
        </Row>
    )
}
//
function RenderContact({ contact }){
    //
    return (
        <Row>
            <Col>
                <p>Name: { contact.name }</p>
                <p>E-mail: { contact.email }</p>
                <p>Phone: { contact.phone }</p>
            </Col>
        </Row>
    )
}
//
class ContactDetail extends React.Component{
    //
    //
    constructor(props){
        super(props);
        //
        this.state = {
            contact: null,
            isLoading: true
        }
    }
    //
    async componentDidMount(){
        const service = new ContactsService();
        try{
            // get contacts
            const result = await service.getOneContact(this.props.params.contactId);
            //
            this.setState({
                isLoading: false,
                contact: result
            }); 
        }
        catch(error){
            //
            switch(error.response.status){
                case 401: // if token expired, redirect to login
                    this.props.navigate('/login');
                break;
                default:
                    console.log('ContactsService->getAllContacts error: ', error);
            }
        }
    }
    //
    render(){
        const { isLoading, contact } = this.state;
        //
        return (
            <React.Fragment>
                <HeaderMenu />
                <PageContent>
                    <Container>
                        <Row>
                            <Col>
                                <h3>Contact Detail {this.props.contactId}</h3>
                            </Col>
                        </Row>
                        { contact === null && <RenderEmpty /> }
                        { !isLoading && <RenderContact contact={ contact }/> }
                        <Row>
                            <Col>
                                <p>
                                    <Link className="button" to="/contacts">Back to Contacts</Link>
                                 </p>
                            </Col>
                        </Row>
                    </Container>
                </PageContent>
            </React.Fragment>
        )
    }
}
//
export default withRouter(ContactDetail);