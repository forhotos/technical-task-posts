const initialPostsState = {
    posts: [],
    postsLoading: false,
    commentsLoading: false,
    error: null
}

export default function postsReducer (state = initialPostsState, action) {
    switch (action.type) {
        case 'GET_POSTS_BY_USER_REQUEST':
        case 'GET_ALL_POSTS_REQUEST':
            return {
                ...state,
                postsLoading: true
            }
        case 'GET_POSTS_BY_USER_SUCCESS':
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
        case 'GET_POSTS_BY_USER_FAILURE':
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

        case 'SORT_POSTS': {
            let sortedPosts = [...state.posts].sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            sortedPosts = action.payload === 'DESC' ? sortedPosts.reverse() : sortedPosts;

            return {
                ...state,
                posts: sortedPosts
            }
        }

        default:
            return state;
    }
};