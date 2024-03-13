import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { baseURL } from '../baseUrl';
import { getFoodFailure, getFoodPending, getFoodSuccess } from './foodSlice';


function* fetchFood(): Generator<any, void, any> {
    try {
        const food = yield call(() => axios.get(baseURL));
        const formattedFood = yield food.data.meals;
        yield put(getFoodSuccess(formattedFood));
    } catch (error: any) {
        console.log(error, 'error');
        yield put(getFoodFailure(error.message));
    }
}

function* foodSaga() {
    yield takeEvery(getFoodPending.type, fetchFood);
}

export default foodSaga;