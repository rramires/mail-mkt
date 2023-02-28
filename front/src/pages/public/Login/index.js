import React from "react";
//
import { 
    Container,
    Row,
    Col,
    Form,
    Button } from "react-bootstrap";
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
                    <Col xs={12} md={5}>
                        <div>
                            <img src={MMLogo} alt="MailMarket Logo"/>
                        </div>
                        <h2>Login</h2>
                        <p>Enter your credentials</p>
                        <Form onSubmit={this.onFormSubmit}>
                            <Form.Group controlId="emailGroup">
                                <Form.Label>E-mail:</Form.Label>
                                <Form.Control type="email" 
                                              placeholder="Type your e-mail"/>
                            </Form.Group>
                            <Form.Group controlId="passwordGroup">
                                <Form.Label>E-mail:</Form.Label>
                                <Form.Control type="password" 
                                              placeholder="Type your password"/>
                            </Form.Group>
                            <Form.Group className="d-grid mt-3">
                                <Button type="submit">
                                    Login
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
//
export default Login;