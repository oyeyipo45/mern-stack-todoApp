import { GET_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO } from "./types";



export const getTodos = () => {
    return {
        type: GET_TODOS
    }
}