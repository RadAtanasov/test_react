import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import actions from '../../actions/index';
import {checkAuthOnServer} from '../../reducers/auth';
import {getUsersFromServer} from '../../reducers/usersData';

import Header from '../../components/Header/Header';
import axios from 'axios';
import MainTable from '../../components/MainTable/MainTable';
import ShowModal from '../../containers/Modals/ShowModal/ShowModal';
import DeleteModal from '../../containers/Modals/DeleteModal/DeleteModal';

class HomePage extends React.Component {
    logout = () => {
        axios.get('/logout').then((res) => {
            if (res.data.result) {
                this.props.checkAuthorisation();
            }
        });
    };

    componentDidMount() {
        this.props.checkAuthorisation();
    }

    componentWillMount() {
        this.props.getUsersData();
    }

    componentWillUnmount() {
        this.props.clearUsersData();
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to='/auth'/>
        } else {
            return (
                <div>
                    <Header isAuth={this.props.isAuth} logout={this.logout}/>
                    <h1 className='d-flex justify-content-center mt-2 mb-2'>Users</h1>
                    <MainTable usersData={this.props.usersData} columnsName={this.props.columnsName}/>
                    <ShowModal/>
                    <DeleteModal/>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        usersData: state.usersData,
        columnsName: state.columnsName,
        isAuth: state.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuthorisation: () => {
            dispatch(checkAuthOnServer());
        },
        getUsersData: () => {
            dispatch(getUsersFromServer());
        },
        clearUsersData: () => {
            dispatch({
                type: actions.DELETE_USERS_DATA,
                payload: {}
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);