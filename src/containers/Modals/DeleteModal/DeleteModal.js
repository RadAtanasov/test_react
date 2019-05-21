import React from 'react';
import {
    Modal, Button
} from 'react-bootstrap';
import {connect} from "react-redux";
import actions from "../../../actions";

import DeleteForm from '../../../components/Forms/DeleteForm/DeleteForm';
import axios from "axios/index";
import {checkAuthOnServer} from "../../../reducers/auth";
import {getUsersFromServer} from "../../../reducers/usersData";

class DeleteModal extends React.Component {

    handleDeleteClose = () => {
        this.props.deleteModalChangeState(false);
    };

    onSubmit = (values) => {
        if (this.props.usersData[this.props.showModalForUser].login !== values.login) {
            this.props.addError(actions.ERROR_DELETE, 'Login not correct');
        } else {
            axios.post('/delete', JSON.stringify(values)).then((res) => {
                if (res.data.result) {
                    this.props.checkAuthorisation();
                    this.props.getUsersData();
                    this.handleDeleteClose();
                    this.props.clearErrors();
                } else {
                    this.props.addError(actions.ERROR_DELETE, res.data.error);
                }
            });
        }
    };
    onSubmitClick = () => this.formReference.submit()

    render() {
        if (this.props.usersData[this.props.showModalForUser]) {
            const {title, login} = this.props.usersData[this.props.showModalForUser];
            return (
                <>
                    <Modal show={this.props.deleteModalIsShow} onHide={this.handleDeleteClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                this.props.errors.deleteErrors
                                    ?
                                    <h6 className='d-flex justify-content-center mt-2 mb-2 text-danger'>{this.props.errors.deleteErrors}</h6>
                                    : ''
                            }
                            <h6>For delete {login} user, please enter:</h6>
                            <DeleteForm
                                onSubmit={this.onSubmit}
                                ref={form => this.formReference = form}
                            />

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleDeleteClose}>
                                Close
                            </Button>
                            <Button label="Submit"
                                    onClick={this.onSubmitClick}>
                                Delete
                            </Button>


                        </Modal.Footer>
                    </Modal>
                </>
            );
        } else {
            return '';
        }
    }
}

const mapStateToProps = state => {
    return {
        deleteModalIsShow: state.deleteModalIsShow,
        usersData: state.usersData,
        columnsName: state.columnsName,
        showModalForUser: state.showModalForUser,
        errors: state.errors
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteModalChangeState: (state) => {
            dispatch({
                type: actions.CHANGE_DELETE_MODAL_STATE,
                payload: state
            })
        },
        checkAuthorisation: () => {
            dispatch(checkAuthOnServer());
        },
        getUsersData: () => {
            dispatch(getUsersFromServer());
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);