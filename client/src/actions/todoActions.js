import axios from "axios"
import { GET_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, TODOS_LOADING  } from "./types";



export const getTodos = () =>  dispatch => {
    dispatch(setTodosLoading());
    axios.get("/api/todos")
    
    .then(res => 
        
        dispatch({
            type: GET_TODOS,
            payload: res.data
        }))
        
        
}

 
export const addTodo = todo => async dispatch => {
  try {
    const  data   = await axios.post("/api/todos", todo).then(res =>
       
        dispatch({
          type: ADD_TODO,
          payload: res.data
        })
      ); 
      console.log(data);
      
  } catch (error) {
      console.log(error);
  }

    // axios
    // .post("/api/todos", todo)
    // .then(res => 
    //     dispatch({
    //     type: ADD_TODO,
    //     payload: res.data
    // }))
};


export const deleteTodo = id => dispatch => {
   axios.delete(`/api/todos/${id}`)
   .then(res => 
    dispatch({
            type: DELETE_TODO,
            payload: id
    }))
}


export const editTodo = (todo) => {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}

export const setTodosLoading = () => {
    return {
        type: TODOS_LOADING
    }
}