import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { editTodo } from "../actions/todoActions";



class EditModal extends Component {
  state = {
    modal: false,
    editTodo: false,
    todo: " ",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      editTodo: !this.state.editTodo
    });
  };


  onChange = e => {
      this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit = e => {
      e.preventDefault();

      const newTodo = {
        todo: this.state.todo
      }
      
      this.props.editTodo(newTodo)

      this.toggle()
  }



  render() {

    console.log(this.props.todo);
    
    return (
      <div>
        <Button
          onClick={this.toggle}
        >  &#9999; </Button>
          <Modal isOpen={this.state.modal} toggle={this.toogle}>
            <ModalHeader toggle={this.toggle}>Update TodoList</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.onSubmit}>
                     <FormGroup>
                     <Label for="todo">Todo</Label>
                    <Input 
                    type="text"
                    name="todo" 
                    id="todo"
                    placeholder="Add Todo"
                    onChange={this.onChange}
                    />
                    <Button 
                    color="dark"
                    style={{marginTop: "2rem"}}
                    block
                    >Update Todo</Button>
                     </FormGroup>
                </Form>
            </ModalBody>
          </Modal>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    todo : state.todo
})

const mapDisPatchToProps = {
    editTodo
}

export default connect(mapStateToProps, mapDisPatchToProps)(EditModal);
