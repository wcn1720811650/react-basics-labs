import React from "react";
const AddTaskForm  = (props) =>{
    return(
        <div>
        <form onSubmit={props.submit}>
          <label>
              Task title:
              <br />
              <input type="text" name="title" required onChange={(event) => props.change(event)}/>
          </label>
          <br />
          <label>
              Due date:
              <br />
              <input type="date" name="deadline" required onChange={(event) => props.change(event)}/>
          </label>
          <br />
          <label>
              Details:
              <br />
              <input type="text" name="description" onChange={(event) => props.change(event)}/>
          </label>
          <label>
              Priority
              <br />
          <select name="priority" onChange={(event) => props.change(event)}>
               <option>Low</option>\
               <option>Medium</option>
               <option>High</option>
          </select>
          </label>
          <br />
          <input type="submit" value="Submit" />
          </form>
      </div>
    )
};
export default AddTaskForm 