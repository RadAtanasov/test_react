import actions from '../actions/index';


let initialState = 0;

const showModalForUser = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_USER_SHOW_MODAL:
            return action.payload;
        default:
            return state;
    }
};

export default showModalForUser;
