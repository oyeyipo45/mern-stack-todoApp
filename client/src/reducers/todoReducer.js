
import { GET_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, TODOS_LOADING, IS_EDITING, } from "../actions/types";

const initialState = {
  todos: [],
  loading: false,
  isEditing: false
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false 
      };
      case ADD_TODO:
        return {
          ...state,
          todos: [action.payload, ...state.todos]
        };
      case DELETE_TODO:
        const updatedArray = state.todos.filter(todo => todo._id !== action.payload)
        return {
          ...state,
          todos: updatedArray
        };
        case EDIT_TODO:
          
          const todosArray = [...state.todos]
            const indexOfTodoToUpdate = todosArray.findIndex(todo => todo._id === action.payload.id)
            console.log(indexOfTodoToUpdate)
            todosArray[indexOfTodoToUpdate].todo  =  action.payload.todo
        return {
          todosArray
        }
        case TODOS_LOADING:
          return {
            ...state,
            loading: true
          }
        case IS_EDITING:
        return{
          ...state,
          isEditing: true
        }
    default:
      return state;
  }
};


export default todoReducer;
