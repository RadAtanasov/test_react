import axios from 'axios';
import actions from '../actions/index';
import {prepareUsersData} from '../helpers/prepareDataFromResponce';


let initialState = [];

const usersData = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_USERS_DATA:
            return action.payload;
        case actions.DELETE_USERS_DATA:
            return action.payload;
        default:
            return state;
    }
};

export default usersData;


export function getUsersFromServer() {
    return dispatch => {
        axios.get('/getUsers').then((res) => {
            if (res.data.result) {
                dispatch({
                    type: actions.SET_USERS_DATA,
                    payload: prepareUsersData(res.data.data)
                });
            }
        });
    };
};
