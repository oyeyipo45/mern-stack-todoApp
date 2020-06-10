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
import { addItem } from "../actions/todoActions";
import { v4 as uuid } from "uuid";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
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
        name: this.state.name
      }
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
                     <Label for="item">Todo</Label>
                    <Input 
                    type="text"
                    name="name"
                    id="item"
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

export default connect()(ItemModal);
