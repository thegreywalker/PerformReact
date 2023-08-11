import { createSlice, current } from "@reduxjs/toolkit";
import { produce } from "immer";

const todoSlice = createSlice({
    name: "TodoSlice",
    initialState: [
        {
            catId: "id1xdg56",
            name: "Coding",
            todos: [
                {
                    todoId: "_id45fgcx",
                    name: "Make Todo App",
                    desc: "Complete the Todo Application by today",
                },
                {
                    todoId: "1",
                    name: "Make AirBnb Clone",
                    desc: "Complete the Clone by tomorrow",
                },
                {
                    todoId: "678rft4x",
                    name: "Make Amazon Clone",
                    desc: "Complete the Amazon Clone by Tuesday",
                },
            ],
        },
    ],
    reducers: {
        addCategory: (state, action) => {
            state.push({
                catId: action.payload.id,
                name: action.payload.name,
                todos: [],
            });
        },
        addTodo: (state, action) => {
            const todo = state.map(cat => cat.filter(
                (cat) => cat.catId === action.payload.catId
            ));
            todo.push({
                todoId: action.payload.todoId,
                name: action.payload.name,
                desc: action.payload.desc,
            });
        },
        deleteTodo: (state, action) => {
            const index = state[0].todos.findIndex(todo => todo.todoId === action.payload);
            state[0].todos.splice(index, 1)
        },
    },
});

export default todoSlice.reducer;
export const { addCategory, addTodo, deleteTodo } = todoSlice.actions;
