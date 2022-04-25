import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    NewProduct: [],
    SaveProduct: [],
    AllProducts: []
};

export const ProductReducer = createSlice({
    name: 'Beauty',
    initialState,
    reducers: {
        NewProduct: (state, action) => {
            state.NewProduct = action.payload;
        },
        SaveProduct: (state, action) => {
            state.SaveProduct = true;
        },
        AllProducts: (state, action) => {
            state.AllProducts = action.payload;
        },
    },
});

export const { NewProduct, SaveProduct, AllProducts } =
    ProductReducer.actions;
export default ProductReducer.reducer;
