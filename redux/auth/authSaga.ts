import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {baseURL} from '../baseUrl';
import { postAuthPending, postAuthSuccess } from './authSlice';
const url = `${baseURL}/album`;

function* login(action: any): Generator<any, void, any> {
    try {
        const data = action.payload;
        const response = yield call(() => axios.post(`${baseURL}/login`, data));
        const auth = yield response;
        yield put(postAuthSuccess(auth));
    } catch (error) {
        // toast.error('Something went wrong');
        console.log(error);
        // Handle error here
    }
}
function* authSaga() {
    yield takeLatest(postAuthPending.type, login);
}

export default authSaga;