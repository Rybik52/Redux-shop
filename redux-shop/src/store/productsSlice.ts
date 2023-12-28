import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
    },
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
    },
});

export const { setAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
