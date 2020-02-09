import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import AuthForm from '../components/AuthForm'
import InputComponent from '../components/inputComponent'

const Auth = props => {
    return(
        <Container className='vh-100'>
            <Row className="justify-content-center vh-100">
                <Col xs='6' className='d-flex align-items-center col-6'>
                    {/*<AuthForm/> */}
                    <InputComponent/>
                </Col>
            </Row>    
        </Container>
       
    )
}

export default Auth;
