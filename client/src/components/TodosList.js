import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getTodos, deleteTodo} from '../actions/todoActions';
import PropTypes from "prop-types";

class TodosList extends Component {

    componentDidMount() {
        this.props.getTodos();
    }
    
    handleDelete = (id) => {
        this.props.deleteTodo(id)
    }

    render() { 

        const { todos } = this.props.todo;
        console.log(this.props)
        
        return ( 
            <Container>
                {/* <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const todo = prompt('ENTER TODO')
                    if(todo) {
                        this.setState(state => ({
                            todos: [...state.todos, {id:uuidv4(), todo:todo}]
                        }))
                    }
                }}>
                    Add Todo
                    </Button> */}
                    <ListGroup>
                        <TransitionGroup className="todo-list">
                            {todos.map(({id, todo}) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <div className="todos">
                                        <div className="todo-angle">
                                        {todo}
                                        </div>
                                        <div className="buttons">
                                        <Button
                                        className="remove-btn edit-btn"
                                        color="primary"
                                        size="sm"
                                        onClick={() => console.log("working")
                                        }>
                                         &#9999;
                                        </Button>
                                        <Button
                                        className="remove-btn d-flex justify-content-end"
                                        color="danger"
                                       
                                        size="sm"
                                        onClick = {this.handleDelete.bind(this, id)}>
                                          &times;  
                                        </Button>
                                        </div>
                                        </div>
                                        
                                        
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                   
            </Container>
         );
    }
}

TodosList.propTypes = {
    todo: PropTypes.object.isRequired,
    getTodos: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

const mapDispatchToProps = {
    getTodos, deleteTodo
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);




// class TodosList extends Component{
//     state = {
//         todo: "",
//         todos: [ ]
//     }
     
    
//    handleSubmit = e => {
//      e.preventDefault();
//      const newItem = {
//        title: this.state.todo,
//        id: uuidv4()
//      };
//      const updatedItem = [...this.state.todos, newItem];
//      this.setState({
//        todos: updatedItem,
//        todo: ""
//      });
//    };
 
//     handleChange = (e) => {
//        this.setState({
//          todo : e.target.value
//        })
//    }
//        render (){
//            const { todo } = this.state;
//          return ( 
//             <div>
//                  <form>
//                  <input 
//              type="text"
//              name="todo"
//              value={todo}
//              onChange={this.handleChange} />
             
//              </form>
//              <button onClick={this.handleSubmit}>add</button>
//             </div>
//           );
//        }
        
     
//  }
  
//  export default TodosList;