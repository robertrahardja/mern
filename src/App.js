import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import taskList from "./components/tasks-list.component"
import Edittask from "./components/edit-tasks.component"
import Createtask from "./components/create-task.component"
import CreateUser from "./components/create-user.component"


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" component={taskList} />
        <Route path="/edit/:id" component={Edittask} />
        <Route path="/create" component={Createtask} />
        <Route path="/user" component={CreateUser} />
      </div> 
    </Router>
    
  );
}

export default App;
