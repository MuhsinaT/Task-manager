import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

const taskStore=configureStore({
    reducer:{
        taskReducer:taskSlice
    }
})

export default taskStore