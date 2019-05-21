import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form, Button} from 'react-bootstrap';

let LoginForm = props => {
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
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
};

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;