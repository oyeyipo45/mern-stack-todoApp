import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/AppNavBar";
import TodosList from "./components/TodosList";


import { Provider } from "react-redux";
import store from "./store/store.js";




function App() {
  return (
    
      <Provider store={store}>
        <div className="App">
        <AppNavBar />
        <TodosList />
        </div>
      </Provider>
    
  );
}

export default App;
