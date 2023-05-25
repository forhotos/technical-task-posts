export const getAllPosts = () => ({
    type: 'GET_ALL_POSTS',
});

export const getPostsByUser = (userId) => ({
    type: 'GET_POSTS_BY_USER',
    payload: userId
});

export const getUser = (userId) => ({
    type: 'GET_USER',
    payload: userId
});

export const geCommentsByPost = (postId) => ({
    type: 'GET_COMMENTS_BY_POST',
    payload: postId
});