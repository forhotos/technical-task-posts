export const getAllPostsRequest = () => ({
    type: 'GET_ALL_POSTS_REQUEST',
});

export const getAllPosts = (query) => ({
    type: 'GET_ALL_POSTS',
    payload: query
});

export const getAllPostsSuccess = (posts) => ({
    type: 'GET_ALL_POSTS_SUCCESS',
    payload: posts

});

export const getAllPostsFailure = (error) => ({
    type: 'GET_ALL_POSTS_FAILURE',
    payload: error
});

export const geCommentsByPostRequest = () => ({
    type: 'GET_COMMENTS_BY_POST_REQUEST',
});

export const geCommentsByPost = (postId) => ({
    type: 'GET_COMMENTS_BY_POST',
    payload: postId
});

export const geCommentsByPostSuccess = (postId, comments) => ({
    type: 'GET_COMMENTS_BY_POST_SUCCESS',
    payload: { postId, comments }
});

export const geCommentsByPostFailure = (error) => ({
    type: 'GET_COMMENTS_BY_POST_FAILURE',
    payload: error
});

export const getPostsByUserRequest = () => ({
    type: 'GET_POSTS_BY_USER_REQUEST',
});

export const getPostsByUser = (userId) => ({
    type: 'GET_POSTS_BY_USER',
    payload: userId
});

export const getPostsByUserSuccess = (posts) => ({
    type: 'GET_POSTS_BY_USER_SUCCESS',
    payload: posts

});

export const getPostsByUserFailure = (error) => ({
    type: 'GET_POSTS_BY_USER_FAILURE',
    payload: error
});

export const sortPosts = (type) => ({
    type: 'SORT_POSTS',
    payload: type
});
