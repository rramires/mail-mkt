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
import { BoxContent, BoxForm } from './styles';
//
import MMLogo from '../../../assets/mmLogo.png';
//
class Login extends React.Component{
    //
    onFormSubmit = async (event) =>{
        event.preventDefault();
        alert('onSubmit: ');
    }
    render(){
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                        <BoxContent>
                            <img className="img-fluid"
                                 src={MMLogo} 
                                 alt="MailMarket Logo"/>
                        </BoxContent>
                        <BoxForm>
                            <h2>Login</h2>
                            <p>Enter your credentials</p>
                            <Form onSubmit={this.onFormSubmit}>
                                <Form.Group controlId="emailGroup">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control type="email" 
                                                placeholder="Type your e-mail"/>
                                </Form.Group>
                                <Form.Group controlId="passwordGroup">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" 
                                                placeholder="Type your password"/>
                                </Form.Group>
                                <Form.Group className="d-grid mt-3">
                                    <Button type="submit">
                                        Login
                                    </Button>
                                </Form.Group>
                            </Form>
                        </BoxForm>
                        <BoxContent>
                            <p>First Time Here?</p>
                            <Link className="button" to="/signup">Create your account now</Link>
                        </BoxContent>
                    </Col>
                </Row>
            </Container>
        )
    }
}
//
export default Login;