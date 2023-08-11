import { configureStore } from "@reduxjs/toolkit"
import TodoSliceReducer from "./slices/todoSlice"
import SearchSliceReducer from "./slices/searchSlice"

const appStore = configureStore({
    reducer: {
        todo: TodoSliceReducer,
        search: SearchSliceReducer
    }
})

export default appStore;