import { v4 as uuidv4 } from "uuid";
import { GET_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actions/types";

const initialState = {
  todos: [
    { id: uuidv4(), todo: "go to market" },
    { id: uuidv4(), todo: "I want to eart" },
    { id: uuidv4(), todo: "meet banker" },
    { id: uuidv4(), todo: "wetin dup" },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
      };
      case DELETE_TODO:
        const updatedArray = state.todos.filter(todo => todo.id !== action.payload) 
        return {
          ...state,
          todos: updatedArray
        };
    default:
      return state;
  }
};


export default todoReducer;
