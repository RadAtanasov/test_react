import React from 'react';
import {connect} from 'react-redux';
import {Button} from "react-bootstrap";
import actions from '../../actions/index'

class ShowButton extends React.Component {
    handleShow = () => {
        this.props.changeCurrentUserForShowModal(this.props.userId);
        this.props.showModalChangeState(true)
    }

    render() {
        return (
            <>
                <Button className='mr-2' onClick={this.handleShow}>Show</Button>
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        showModalIsShow: state.showModalIsShow,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showModalChangeState: (state) => {
            dispatch({
                type: actions.CHANGE_MODAL_STATE,
                payload: state
            })
        },
        changeCurrentUserForShowModal: (userId) => {
            dispatch({
                type: actions.CHANGE_USER_SHOW_MODAL,
                payload: userId
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowButton);