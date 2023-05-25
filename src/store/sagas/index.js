import axios from "axios";
import { all, takeLatest, put, call, takeEvery } from "redux-saga/effects";

const apiUrl = process.env.REACT_APP_API_URL;

function* fetchAllPostsSaga(action) {
    try {
        yield put({type: 'GET_ALL_POSTS_REQUEST'});
        const response = yield call(() =>
            axios
                .get(`${ apiUrl }/posts`)
                .then(res => new Promise(resolve => setTimeout(() => resolve(res), 500)))
        );
        yield put({type: 'GET_ALL_POSTS_SUCCESS', payload: response.data});

    } catch (e) {
        yield put({type: 'GET_ALL_POSTS_FAILURE', error: e.message});
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest('GET_ALL_POSTS', fetchAllPostsSaga),
    ])
};