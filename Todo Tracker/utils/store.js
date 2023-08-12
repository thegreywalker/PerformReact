import { produce } from "immer";
import { nanoid } from "nanoid";
import { create } from "zustand";

const todoStore = create((set) => ({
    todos: [
        {
            catId: "2xdf45rc",
            todoId: "8irdf5tf",
            name: "My Task 1",
            description: "First Todo Description",
        },
        {
            catId: "45fcxdr5rc",
            todoId: "8irdf5tf",
            name: "My Task 2",
            description: "Second Todo Description",
        },
        {
            catId: "2xdf45rc",
            todoId: "gfh7bhbfh",
            name: "My Task 3",
            description: "Third Todo Description",
        },
    ],
    categories: [
        { catId: "2xdf45rc", name: "Todo App" },
        { catId: "45fcxdr5rc", name: "AirBnb App" },
    ],
    addTodo: (payload) =>
        set(
            produce((state) => {
                state.todos.push({
                    catId: payload.catId,
                    todoId: nanoid(),
                    name: payload.name,
                    description: payload.description,
                });
            })
        ),
    addCategory: (payload) =>
        set(
            produce((state) => {
                state.categories.push({ catId: nanoid(), name: payload.name });
            })
        ),
    removeTodo: (payload) =>
        set(
            produce((state) => {
                const index = state.todos.find(
                    (todo) => todo.todoId === payload.todoId
                );
                state.todos.splice(index, 1);
            })
        ),
    removeCategory: (payload) =>
        set(
            produce((state) => {
                const index = state.categories.find(
                    (cat) => cat.catId === payload.catId
                );
                state.categories.splice(index, 1);
            })
        ),
}));

export const useTodosStore = todoStore;
