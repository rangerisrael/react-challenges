import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// type
type Todo={
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}
// value
const initialState:Todo ={
  userId: 0,
  id: 0,
  title: "",
  completed: false
} 

//reducer
const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    createTodo:(_state,action:PayloadAction<Todo>)=>{
      return action.payload;
    }
  }
});
//action
export const {createTodo} = todoSlice.actions;

//extract

export default todoSlice.reducer;