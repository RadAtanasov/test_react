import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form} from 'react-bootstrap';

let DeleteForm = props => {
    const {handleSubmit, onSubmit} = props;
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicLogin">
                <Form.Label>Login</Form.Label>
                <Field className="form-control" name="login" component="input" type="login"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Field className="form-control" name="password" component="input" type="password"/>
            </Form.Group>
        </Form>
    )
};

DeleteForm = reduxForm({
    form: 'delete'
})(DeleteForm);

export default DeleteForm;