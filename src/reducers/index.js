import usersData from './usersData';
import columnsName from './columnsName';
import auth from './auth';
import showModalIsShow from './showModalState';
import showModalForUser from './showModalForUser';
import deleteModalState from './deleteModalState';
import errors from './errors';

const reducers = {
    usersData: usersData,
    columnsName: columnsName,
    isAuth: auth,
    showModalIsShow: showModalIsShow,
    showModalForUser: showModalForUser,
    deleteModalIsShow: deleteModalState,
    errors: errors
};

export default reducers;