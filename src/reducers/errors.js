import actions from '../actions/index';

let initialState = {
    registerError: null,
    loginError: null,
    deleteErrors: null
};

const errors = (state = initialState, action) => {
    switch (action.type) {
        case actions.ERROR_REGISTER:
            return {
                ...state,
                registerError: action.payload
            };
        case actions.ERROR_LOGIN:
            return {
                ...state,
                loginError: action.payload
            };
        case actions.ERROR_DELETE:
            return {
                ...state,
                deleteErrors: action.payload
            };
        case actions.CLEAR_ERRORS:
            return {
                ...state,
                registerError: null,
                loginErrors: null
            };
        default:
            return state;
    }
};

export default errors;
