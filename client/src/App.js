import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/AppNavBar";
import TodosList from "./components/TodosList";
import ItemModal from "./components/itemModal";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <ItemModal />
          <TodosList />
        </Container>
      </div>
    </Provider>
  );
}



export default App;
