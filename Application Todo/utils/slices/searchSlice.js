import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "SearchSlice",
    initialState: {search: ""},
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
})

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;