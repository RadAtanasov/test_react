import moment from 'moment';

export const prepareUsersData = (data) => {
    let result = [];

    data.map((user, index) => {
        let newUser = {};

        newUser.id = index;
        newUser.login = user.login;
        newUser.title = user.title;
        newUser.description = user.description;
        newUser.createdAt = moment(user.createdAt).format('LLL');

        result.push(newUser);
    });

    return result;
};