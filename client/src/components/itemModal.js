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
import { v4 as uuid } from "uuid";

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
        id: uuid(),
        todo: this.state.todo
      }
      console.log(newTodo);
      

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
        > Add Todo
          <Modal isOpen={this.state.modal} toggle={this.toogle}>
            <ModalHeader toggle={this.toggle}>Add Todo</ModalHeader>
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
                    >Add Todo</Button>
                     </FormGroup>
                </Form>
            </ModalBody>
          </Modal>
        </Button>
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
