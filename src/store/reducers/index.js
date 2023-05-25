const initialState = {
    posts: [],
    currentUser: {
        userInfo: null,
        userPosts: []
    },
    postsLoading: false,
    userLoading: false,
    commentsLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_POSTS_REQUEST':
            return {
                ...state,
                postsLoading: true
            }
        case 'GET_ALL_POSTS_SUCCESS': {
            const newPosts = action.payload;
            return {
                ...state,
                postsLoading: false,
                posts: newPosts.map(post => {
                    return {...post, comments: []}
                })
            }
        }
        case 'GET_ALL_POSTS_FAILURE':
            return {
                ...state,
                postsLoading: false,
                error: action.payload
            }

        case 'GET_COMMENTS_BY_POST_REQUEST':
            return {
                ...state,
                commentsLoading: true
            }
        case 'GET_COMMENTS_BY_POST_SUCCESS': {
            const { postId, comments } = action.payload;
            const newPosts = [ ...state.posts ];

            const index = newPosts.findIndex(post => post.id === postId);
            newPosts[index].comments = comments;

            return {
                ...state,
                commentsLoading: false,
                posts: newPosts
            }
        }
        case 'GET_COMMENTS_BY_POST_FAILURE':
            return {
                ...state,
                commentsLoading: false,
                error: action.payload
            }


        case 'GET_USER_REQUEST':
            return {
                ...state,
                userLoading: true
            }
        case 'GET_USER_SUCCESS': {
            const { userInfo, userPosts } = action.payload;
            return {
                ...state,
                userLoading: false,
                currentUser: {
                    userInfo,
                    userPosts
                }
            }
        }
        case 'GET_USER_FAILURE':
            return {
                ...state,
                userLoading: false,
                error: action.payload
            }


        default:
            return state;
    }
};

export default reducer;