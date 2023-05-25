const initialUsersState = {
    userInfo: null,
    userLoading: false,
    error: null
}

export default function usersReducer(state = initialUsersState, action) {
    switch (action.type) {
        case 'GET_USER_REQUEST':
            return {
                ...state,
                userLoading: true
            }
        case 'GET_USER_SUCCESS': {
            return {
                ...state,
                userLoading: false,
                userInfo: action.payload,
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
