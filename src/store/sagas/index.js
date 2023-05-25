import axios from "axios";
import { all, takeLatest, put, call } from "redux-saga/effects";

const apiUrl = process.env.REACT_APP_API_URL;

function* fetchAllPostsSaga() {
    try {
        yield put({type: 'GET_ALL_POSTS_REQUEST'});
        const response = yield call(() =>
            axios
                .get(`${ apiUrl }/posts`)
                .then(res => new Promise(resolve => setTimeout(() => resolve(res), 500)))
        );
        yield put({type: 'GET_ALL_POSTS_SUCCESS', payload: response.data });

    } catch (e) {
        yield put({type: 'GET_ALL_POSTS_FAILURE', error: e.message});
    }
}

function* fetchCommentsByPostSaga(action) {
    try {
        const postId = action.payload;
        yield put({type: 'GET_COMMENTS_BY_POST_REQUEST'});
        const response = yield call(() =>
            axios
                .get(`${ apiUrl }/comments?postId=${postId}`)
                .then(res => new Promise(resolve => setTimeout(() => resolve(res), 500)))
        );
        console.log(response.data);
        yield put({type: 'GET_COMMENTS_BY_POST_SUCCESS', payload: { postId, comments: response.data }});

    } catch (e) {
        yield put({type: 'GET_COMMENTS_BY_POST_FAILURE', error: e.message});
    }
}

function* fetchUser(action) {
    try {
        const userId = action.payload;
        yield put({type: 'GET_USER_REQUEST'});
        const response = yield call(() =>
            axios
                .get(`${ apiUrl }/users/${userId}`)
                .then(res => new Promise(resolve => setTimeout(() => resolve(res), 500)))
        );
        console.log(response.data);
        yield put({type: 'GET_USER_SUCCESS', payload: response.data });

    } catch (e) {
        yield put({type: 'GET_USER_FAILURE', error: e.message});
    }
}

function* fetchPostsByUserSaga(action) {
    try {
        const userId = action.payload;
        yield put({type: 'GET_POSTS_BY_USER_REQUEST'});
        const response = yield call(() =>
            axios
                .get(`${ apiUrl }/posts?userId=${userId}`)
                .then(res => new Promise(resolve => setTimeout(() => resolve(res), 500)))
        );
        yield put({type: 'GET_POSTS_BY_USER_SUCCESS', payload: response.data });

    } catch (e) {
        yield put({type: 'GET_POSTS_BY_USER_FAILURE', error: e.message});
    }
}


export default function* rootSaga() {
    yield all([
        takeLatest('GET_ALL_POSTS', fetchAllPostsSaga),
        takeLatest('GET_COMMENTS_BY_POST', fetchCommentsByPostSaga),
        takeLatest('GET_USER', fetchUser),
        takeLatest('GET_POSTS_BY_USER', fetchPostsByUserSaga),
    ])
};