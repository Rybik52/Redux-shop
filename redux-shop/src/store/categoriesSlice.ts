import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        allCategories: [],
    },
    reducers: {
        setAllProducts: (state, action) => {
            state.allCategories = action.payload;
        },
    },
});

export const { setAllCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
