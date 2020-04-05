import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function TasksList (props) {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/tasks/');
      setTasks(response.data);
    }
      
    fetchData();
  }, []);

  const Task = (props)=>{
    return (
    <tr>
      <td>{props.task.username.toString()}</td>
      <td>{props.task.description.toString()}</td>
      <td>{props.task.duration.toString()}</td>
      <td>{props.task.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.task._id}>edit</Link> | <a href="# " onClick={() => {Deletetask(props.task._id) }}>delete</a>
      </td>
    </tr>
  )}
  
  const Deletetask= (id)=>{
        axios.delete('http://localhost:5000/tasks/'+id)
          .then(response => { console.log(response.data)});
      };

 const TaskList= ()=>{
   return tasks.map(currenttask => {
      return <Task task={currenttask} deletetask={Deletetask} key={currenttask._id}/>;
    });
 };
  

  return (
    <div>
      <h3>Logged tasks</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {TaskList()}
        </tbody>
      </table>
    </div>
  )
  
}