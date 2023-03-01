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
    Button } from "react-bootstrap";
//
import { BoxContent, BoxForm } from '../../styles/styles';
//
import MMLogo from '../../../assets/mmLogo.png';
//
class SignUp extends React.Component{
    //
    onFormSubmit = async (event) =>{
        event.preventDefault();
        alert('SignUp->onSubmit: ');
    }
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
                                  onSubmit={this.onFormSubmit}>
                                <Form.Group controlId="nameGroup">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" 
                                                placeholder="Type your name"/>
                                </Form.Group>
                                <Form.Group controlId="emailGroup">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control type="email" 
                                                placeholder="Type your e-mail"/>
                                </Form.Group>
                                <Form.Group controlId="domainGroup">
                                    <Form.Label>Domain:</Form.Label>
                                    <Form.Control type="url" 
                                                placeholder="Type your domain"/>
                                </Form.Group>
                                <Form.Group controlId="passwordGroup">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" 
                                                placeholder="Type your password"/>
                                </Form.Group>
                                <Form.Group className="d-grid mt-3">
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
export default SignUp;