import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button, Form} from "react-bootstrap";

let RegisterForm = props => {
    const {handleSubmit} = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicLogin">
                <Form.Label>Login</Form.Label>
                <Field className="form-control" name="login" component="input" type="login"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Field className="form-control" name="password" component="input" type="password"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Field className="form-control" name="repeat_password" component="input" type="password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    )
};

RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm);

export default RegisterForm;