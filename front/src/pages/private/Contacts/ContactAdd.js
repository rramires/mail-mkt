import React from "react";
import { 
    Link
} from 'react-router-dom';
import { 
    Container,
    Row,
    Col,
    Form,
    Button,
    Alert } from "react-bootstrap";
//
import { PageContent, BoxContent, BoxForm } from '../../../shared/Styles/commons';
import HeaderMenu from "../../../shared/Header/HeaderMenu";
import withRouter from '../../../shared/utils/withRouter';
//
import ContactsService from '../../services/ContactsService';

class ContactAdd extends React.Component{
    //
    constructor(props){
        super(props);
        //
        this.state = {
            name: '',
            email: '',
            phone: '',
            error: '',
            isLoading: false
        }
    }
    //
    onFieldChange(event){
        this.setState({[event.target.id]: event.target.value});
    } 
    //
    renderError(){
        return (
            <Alert variant="danger" className="mt-4">
                { this.state.error }
            </Alert>
        )
    }
    //
    onContactAddSubmit = async (event) =>{
        event.preventDefault();
        //
        const { name, email, phone, isLoading } = this.state;
        // validate
        if(!name || !email || !phone) {
            this.setState({error: 'All fields must be filled!'});
        }
        else{
            this.setState({error: ''});
            try{
                const service = new ContactsService();
                // call insert contact
                const response = await service.addContact({
                    name, email, phone
                });
                // redirect to Contacts
                this.props.navigate('/contacts');
            }
            catch(error){
                console.error('onFormSubmit: ', error);
                this.setState({error: 'Error registering!'});
            }
        } 
    }

    render(){
        return (
            <React.Fragment>
                <HeaderMenu />
                <PageContent>
                    <Container>
                        <Row>
                            <Col>
                                <h3>Add Contact</h3>
                                <p>Enter your registration data</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl={6} xl={8} lg={10} md={12}>
                                <BoxForm>
                                    <Form className="d-grid gap-2"
                                        onSubmit={this.onContactAddSubmit}>
                                        <Form.Group controlId="nameGroup">
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control id="name"
                                                        type="text"
                                                        placeholder="Type contact name"
                                                        onChange={e => this.onFieldChange(e)}/>
                                        </Form.Group>
                                        <Form.Group controlId="emailGroup">
                                            <Form.Label>E-mail:</Form.Label>
                                            <Form.Control id="email"
                                                        type="email" 
                                                        placeholder="Type contact e-mail"
                                                        onChange={e => this.onFieldChange(e)}/>
                                        </Form.Group>
                                        <Form.Group controlId="phoneGroup">
                                            <Form.Label>Phone:</Form.Label>
                                            <Form.Control id="phone"
                                                        type="text" 
                                                        placeholder="Type contact phone"
                                                        onChange={e => this.onFieldChange(e)}/>
                                        </Form.Group>
                                        { this.state.error && this.renderError() }
                                        <Form.Group className="d-grid mt-2">
                                            <Button type="submit">
                                                Register Contact
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </BoxForm>
                                <BoxContent>
                                    <Link className="button" to="/contacts">Back to Contacts</Link>
                                </BoxContent>
                            </Col>
                        </Row>
                    </Container>
                </PageContent>
            </React.Fragment>
        )
    }
}
//
export default withRouter(ContactAdd);