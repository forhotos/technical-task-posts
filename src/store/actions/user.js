export const getPostsByUserRequest = () => ({
    type: 'GET_ALL_POSTS_REQUEST',
});

export const getPostsByUser = (userId) => ({
    type: 'GET_POSTS_BY_USER',
    payload: userId
});

export const getPostsByUserSuccess = (posts) => ({
    type: 'GET_POSTS_BY_USER',
    payload: posts
});

export const getPostsByUserFailure = (error) => ({
    type: 'GET_POSTS_BY_USER',
    payload: error
});

export const getUserRequest = () => ({
    type: 'GET_USER_REQUEST',
});

export const getUser = (userId) => ({
    type: 'GET_USER',
    payload: userId
});

export const getUserSuccess = (user) => ({
    type: 'GET_USER_SUCCESS',
    payload: user
});

export const geUserFailure = (error) => ({
    type: 'GET_USER_FAILURE',
    payload: error
});