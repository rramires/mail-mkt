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
import { BoxContent, BoxForm } from '../../../shared/Styles';
//
import MMLogo from '../../../assets/mmLogo.png';
//
import withRouter from '../../../shared/utils/withRouter';
import api from '../../services/api';
import { login } from '../../services/auth';
//
class Login extends React.Component{
    //
    state = {
        email: '',
        password: '',
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
    onLoginSubmit = async (event) =>{
        event.preventDefault();
        //
        const { email, password } = this.state;
        // validate
        if(!email || !password) {
            this.setState({error: 'All fields must be filled!'});
        }
        else{
            //this.setState({error: ''});
            try{
                // login
                const response = await api.post('accounts/login', {
                    email, password
                });
                // set token
                login(response.data.token);
                // redirect to Dashboard
                this.props.navigate('/');
            }
            catch(error){
                console.log('onLoginSubmit: ', error);
                this.setState({error: 'Login Fail!'});
            }
        }
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
                            <Form className="d-grid gap-2" 
                                  onSubmit={this.onLoginSubmit}>
                                <Form.Group controlId="emailGroup">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control id="email"
                                                  type="email" 
                                                  placeholder="Type your e-mail"
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
export default withRouter(Login);