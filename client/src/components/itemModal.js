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
import { addTodo } from "../actions/todoActions";

class ItemModal extends Component {
  state = {
    modal: false,
    todo: " ",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
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
      
      this.props.addTodo(newTodo)

      this.toggle()
  }



  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        > Add Todo </Button>
                    <p>TODO EDIT BUTTON IS NOT FUNCTIONAL </p>

          <Modal isOpen={this.state.modal} toggle={this.toogle}>
            <ModalHeader toggle={this.toggle}>Add To TodoList</ModalHeader>
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
                    >Add Todo Joor</Button>
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
    addTodo
}

export default connect(mapStateToProps, mapDisPatchToProps)(ItemModal);
