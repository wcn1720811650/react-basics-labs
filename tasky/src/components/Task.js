import React from "react";
const Task = (props) =>{
    return (
        <div className="card" style={{backgroundColor: props.done? 'lightgrey':'#5bb4c4'}}>  
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p>{props.description}</p>
            <p style={{backgroundColor:props.priority == "Low" ? "green" : props.priority === "Medium" ? "yellow":"red"}}>{props.priority}</p>
            <button className="doneButton" onClick={props.markDone}>Done</button>
            <button className="deleteButton" onClick={props.deleteTask}>Delete</button>


        </div>
    )

}
export default Task