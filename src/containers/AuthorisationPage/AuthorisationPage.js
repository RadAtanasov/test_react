import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {Tabs, Tab, Container} from 'react-bootstrap';
import axios from 'axios';

import actions from '../../actions/index';

import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import Header from "../../components/Header/Header";
import {checkAuthOnServer} from "../../reducers/auth";

class AuthorisationPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'login',
        };
    }

    submitLogin = values => {
        axios.post('/login', JSON.stringify(values)).then((res) => {
            if (res.data.result) {
                this.props.checkAuthorisation();
                this.props.clearErrors();
            } else {
                this.props.addError(actions.ERROR_LOGIN, res.data.error);
            }
        });
    };
    submitRegister = values => {
        axios.post('/register', JSON.stringify(values)).then((res) => {
            if (res.data.result) {
                this.setState({key: 'login'});
                this.props.clearErrors();
            } else {
                this.props.addError(actions.ERROR_REGISTER, res.data.error);
            }
        });
    };

    render() {
        if (this.props.isAuth) {
            return <Redirect to='/'/>
        } else {
            return (
                <div>
                    <Header/>
                    <h1 className='d-flex justify-content-center mt-2 mb-2'>Authorisation</h1>
                    {
                        this.props.errors.registerError
                            ?
                            <h1 className='d-flex justify-content-center mt-2 mb-2 text-danger'>{this.props.errors.registerError}</h1>
                            : ''
                    }
                    {
                        this.props.errors.loginError
                            ?
                            <h1 className='d-flex justify-content-center mt-2 mb-2 text-danger'>{this.props.errors.loginError}</h1>
                            : ''
                    }
                    <Container>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={this.state.key}
                            onSelect={key => this.setState({key})}
                        >
                            <Tab eventKey="login" title="Login">
                                <LoginForm onSubmit={this.submitLogin}/>
                            </Tab>
                            <Tab eventKey="register" title="Registration">
                                <RegisterForm onSubmit={this.submitRegister}/>
                            </Tab>
                        </Tabs>
                    </Container>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth,
        errors: state.errors
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuthorisation: () => {
            dispatch(checkAuthOnServer());
        },
        addError: (type, error) => {
            dispatch({
                type: type,
                payload: error
            })
        },
        clearErrors: () => {
            dispatch({
                type: actions.CLEAR_ERRORS,
                payload: null
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorisationPage);