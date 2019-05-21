import actions from '../actions/index';


let initialState = false;

const showModalIsShow = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_MODAL_STATE:
            return action.payload;
        default:
            return state;
    }
};

export default showModalIsShow;
