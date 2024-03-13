import { createSlice } from '@reduxjs/toolkit';

type Food = {
    strMeal: string;
    strMealThumb: number;
    idMeal: string;
};

type InitialState = {
    foods: Food[];
    isLoading: boolean;
    errMsg: any;
    error: boolean;
};

const initialState: InitialState = {
    foods: [],
    isLoading: false,
    errMsg: '',
    error: false,
};
const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        getFoodPending: (state) => {
            state.isLoading = true;
        },
        getFoodSuccess: (state, action) => {
            state.isLoading = false;
            state.foods = action.payload;
        },
        getFoodFailure: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errMsg = action.payload;
        },
    },
});

export const { getFoodPending, getFoodSuccess, getFoodFailure } = foodSlice.actions;
export default foodSlice.reducer;