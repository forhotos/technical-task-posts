export const getAllPostsRequest = () => ({
    type: 'GET_ALL_POSTS_REQUEST',
});

export const getAllPosts = () => ({
    type: 'GET_ALL_POSTS',
});

export const getAllPostsSuccess = (posts) => ({
    type: 'GET_ALL_POSTS_SUCCESS',
    payload: posts
});

export const getAllPostsFailure = (error) => ({
    type: 'GET_ALL_POSTS_REQUESTED',
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

