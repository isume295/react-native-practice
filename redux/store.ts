import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth/authSlice';
import foodReducer from './food/foodSlice';
import foodSaga from './food/foodSaga';
 

const saga: any = createSagaMiddleware();

const store = configureStore({
    reducer: {
        auth: authReducer,
        food: foodReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});
saga.run(foodSaga);
 

export const foodSelector = (state: RootState) => state.food;
 

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>;S