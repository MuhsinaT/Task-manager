import axios from "axios";

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodoThunk=createAsyncThunk('todos/fetchTodoThunk',async()=>{
    const pro=await axios.get('https://jsonplaceholder.typicode.com/todos?limit=10')
    return pro.data.slice(0, 10);
    console.log(pro.data);
    return pro.data
    // return pro.data.todos
})

const taskSlice=createSlice({
    name:'todos',
    initialState:{
        todos:[],
        loading:'false',
        error:''

    },
    reducers:{
        addTodo(state,action){
            state.todos.push(action.payload)
        },

        deleteTodo(state,action){
            state.todos=state.todos.filter((item)=>item.id!==action.payload)
        },
        editTodo(state, action) {
            const index = state.todos.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = {
                    ...state.todos[index],
                    title: action.payload.title,
                    completed: action.payload.status === 'Completed', 
                };
            }
        },
        

    },

    extraReducers:(builder)=>{
        builder.addCase(fetchTodoThunk.pending,(state,action)=>{
            state.loading=true
        }),
        builder.addCase(fetchTodoThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.todos=action.payload
        }),
        builder.addCase(fetchTodoThunk.rejected,(state,action)=>{
            state.loading=false
            state.todos=[]
            state.error="Api Request Failed"
        })

    }
})

export default taskSlice.reducer
export  const {addTodo,deleteTodo,editTodo} =taskSlice.actions