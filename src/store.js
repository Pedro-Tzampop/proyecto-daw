import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./Reducers/goalsSlice"
import optionReducer from "./Reducers/opitonSlice"
import taskReducer from "./Reducers/tasksSlice"

export default configureStore({
    reducer: {
        goals:goalReducer,
        option:optionReducer,
        tasks: taskReducer
    }
})