import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import parseJson from 'parse-json';
const AuthForm = (props) => {
    const [isSignUp, setSignUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = null;


    const setSignUpFalse = () => {
        setSignUp(false)
    }
    const setSignUpTrue = () => {
        setSignUp(true)

    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const register = () => {
        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify([]))
        }
        const users = JSON.parse(localStorage.getItem("users"));
        const user = {
            email,
            password
        }
        const userExists = users.some((existedUser) => existedUser.email === user.email)
        if(!userExists){
          users.push(user);
          setMessage(null)
          localStorage.setItem("users", JSON.stringify(users))
        }else{
            setMessage('User with email ${email} already exists')
        }

        console.log('REGISTER',users, email, password)
    }
    const login = () => {
        console.log('LOGIN')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignUp === true) {
            register()

        } else {
            login()
        }
    }



    return (
        <div className='w-100'>
            <h1>{isSignUp ? "SignUp" : "Login"}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={setEmail} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
          </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={setPassword} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
        </Button>
            </Form>
            {isSignUp && <p>If you already have a password,please <Button variant="link" onClick={setSignUpFalse}>Log In</Button> </p>}
            {!isSignUp && <p>If you want to sign up, please <Button variant="link" onClick={setSignUpTrue}>Sign Up</Button> </p>}

        </div>
    )
}

export default AuthForm;