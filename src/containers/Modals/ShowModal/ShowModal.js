import React from 'react';
import {
    Modal, Button
} from 'react-bootstrap';
import {connect} from "react-redux";
import actions from "../../../actions";

class ShowModal extends React.Component {

    handleClose = () => {
        this.props.showModalChangeState(false);
    };

    render() {
        if (this.props.usersData[this.props.showModalForUser]) {
            const {title, description, createdAt} = this.props.usersData[this.props.showModalForUser];
            return (
                <>
                    <Modal show={this.props.showModalIsShow} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{description}</p>
                            <p>{createdAt}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
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
        showModalIsShow: state.showModalIsShow,
        usersData: state.usersData,
        columnsName: state.columnsName,
        showModalForUser: state.showModalForUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showModalChangeState: (state) => {
            dispatch({
                type: actions.CHANGE_MODAL_STATE,
                payload: state
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowModal);