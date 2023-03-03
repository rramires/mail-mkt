import React from "react";
//
import { 
    Link
} from 'react-router-dom';
//
import { 
    Container,
    Row,
    Col,
    Form,
    Button,
    Alert } from "react-bootstrap";
//
import { BoxContent, BoxForm } from '../../styles/styles';
//
import MMLogo from '../../../assets/mmLogo.png';
//
import withRouter from '../../utils/withRouter';
import api from '../../services/api';
//
class SignUp extends React.Component{
    //
    state = {
        name: '',
        email: '',
        password: '',
        domain: '',
        error: '',
        isLoading: false
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
    onSignInSubmit = async (event) =>{
        event.preventDefault();
        //
        const { name, email, password, domain, isLoading } = this.state;
        // validate
        if(!name || !email || !password || !domain) {
            this.setState({error: 'All fields must be filled!'});
        }
        else{
            this.setState({error: ''});
            try{
                // insert
                await api.post('accounts', {
                    name, email, password, domain
                });
                // redirect to Login
                this.props.navigate('/login');
            }
            catch(error){
                console.error('onFormSubmit: ', error);
                this.setState({error: 'Error registering!'});
            }
        }
    }
    //
    render(){
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                        <BoxContent>
                            <img className="img-fluid"
                                 src={MMLogo} 
                                 alt="MailMarket Logo"/>
                        </BoxContent>
                        <BoxForm>
                            <h2>Registration</h2>
                            <p>Enter your registration data</p>
                            <Form className="d-grid gap-2"
                                  onSubmit={this.onSignInSubmit}>
                                <Form.Group controlId="nameGroup">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control id="name"
                                                  type="text"
                                                  placeholder="Type your name"
                                                  onChange={e => this.onFieldChange(e)}/>
                                </Form.Group>
                                <Form.Group controlId="emailGroup">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control id="email"
                                                  type="email" 
                                                  placeholder="Type your e-mail"
                                                  onChange={e => this.onFieldChange(e)}/>
                                </Form.Group>
                                <Form.Group controlId="domainGroup">
                                    <Form.Label>Domain:</Form.Label>
                                    <Form.Control id="domain"
                                                  type="url" 
                                                  placeholder="Type your domain"
                                                  onChange={e => this.onFieldChange(e)}/>
                                </Form.Group>
                                <Form.Group controlId="passwordGroup">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control id="password"
                                                  type="password" 
                                                  placeholder="Type your password"
                                                  onChange={e => this.onFieldChange(e)}/>
                                </Form.Group>
                                { this.state.error && this.renderError() }
                                <Form.Group className="d-grid mt-2">
                                    <Button type="submit">
                                        Sign Up
                                    </Button>
                                </Form.Group>
                            </Form>
                        </BoxForm>
                        <BoxContent>
                            <p>Already registered?</p>
                            <Link className="button" to="/login">Back to Login</Link>
                        </BoxContent>
                    </Col>
                </Row>  
            </Container>
        )
    }
}
//
export default withRouter(SignUp);