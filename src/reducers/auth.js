import axios from 'axios';
import actions from '../actions/index';

let initialState = {
    isAuth: false
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_AUTH_STATUS:
            return action.payload;
        default:
            return state;
    }
};

export default auth;


export function checkAuthOnServer() {
    return dispatch => {
        axios.get('/checkAuth').then((res) => {
            dispatch({
                type: actions.CHANGE_AUTH_STATUS,
                payload: res.data.data ? true : false
            });
        });
    };
};
