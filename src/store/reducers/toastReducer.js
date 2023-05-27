const initialState = {
    isShown: false,
    message: null
}

export default function toastReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_TOAST': {
            return {
                ...state,
                isShown: true,
                message: action.payload
            }
        }
        case 'HIDE_TOAST': {
            return {
                ...state,
                isShown: false,
                message: null
            }
        }
        default:
            return state;
    }
}

