import actions from '../actions/index';


let initialState = false;

const deleteModalState = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_DELETE_MODAL_STATE:
            return action.payload;
        default:
            return state;
    }
};

export default deleteModalState;
