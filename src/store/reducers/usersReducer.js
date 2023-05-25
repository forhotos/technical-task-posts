const initialState = {
    userInfo: null,
    userLoading: false,
    error: null
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER_REQUEST':
            return {
                ...state,
                userLoading: true
            }
        case 'GET_USER_SUCCESS': {
            const {userInfo, userPosts} = action.payload;
            return {
                ...state,
                userLoading: false,
                userInfo,
                userPosts
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
