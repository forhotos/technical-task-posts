export const getUserRequest = () => ({
    type: 'GET_USER_REQUEST',
});

export const getUser = (userId) => ({
    type: 'GET_USER',
    payload: userId
});

export const getUserSuccess = (userInfo, userPosts) => ({
    type: 'GET_USER_SUCCESS',
    payload: { userInfo, userPosts }
});

export const geUserFailure = (error) => ({
    type: 'GET_USER_FAILURE',
    payload: error
});