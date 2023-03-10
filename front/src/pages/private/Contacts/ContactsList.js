import React from "react";
//
import {
    Link,
    useLocation
} from 'react-router-dom';
//
import { 
    Container,
    Table,
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
function RenderLine({ contact }){
    //
    const location = useLocation();
    return (
        <tr>
            <td>{ contact.name }</td>
            <td>{ contact.email }</td>
            <td><Link className="float-end" to={`${location.pathname}/${contact.id}`}>Detail</Link></td>
        </tr>
    )
}
//
function RenderTable({ contacts }) {
    return (
         <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {   // map lines 
                    contacts.map((item) => {
                        return(
                            <RenderLine key={item.id} contact={item} />
                        )
                    })
                }
            </tbody>
         </Table>
    );
}
//
class ContactsList extends React.Component{
    //
    constructor(props){
        super(props);
        //
        this.state = {
            contacts: [],
            isLoading: true
        }
    }
    //
    async componentDidMount(){
        const service = new ContactsService();
        try{
            // get contacts
            const result = await service.getAllContacts();
            //
            this.setState({
                isLoading: false,
                contacts: result
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
        const { isLoading, contacts } = this.state;
        //
        return (
            <React.Fragment>
                <HeaderMenu />
                <PageContent>
                    <Container>
                        <Row>
                            <Col>
                                <h3>Contacts</h3>
                            </Col>
                            <Col>
                                <Link className="btn btn-success float-end" to="/contacts/add">Add Contact</Link>
                            </Col>
                        </Row>
                        { contacts.length === 0 && <RenderEmpty /> }
                        { !isLoading && <RenderTable contacts={ contacts }/> }
                    </Container>
                </PageContent>
            </React.Fragment>
        )
    }
}
//
export default withRouter(ContactsList);