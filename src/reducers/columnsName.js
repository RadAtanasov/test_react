import actions from '../actions/index';

let initialState = {
    id: 'ID',
    title: 'Title',
    description: 'Description',
    createdAt: 'Created At',
    actions: 'Actions'
};

const columnsName = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_COLUMNS_NAME:
            return action.payload;
        default:
            return state;
    }
};

export default columnsName;