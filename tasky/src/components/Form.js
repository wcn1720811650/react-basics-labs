import React from "react";
const AddTaskForm  = () =>{
    return(
        <div>
        <form>
          <label>
              Task title:
              <br />
              <input type="text" name="title" required />
          </label>
          <br />
          <label>
              Due date:
              <br />
              <input type="date" name="deadline" required />
          </label>
          <br />
          <label>
              Details:
              <br />
              <input type="text" name="description" />
          </label>
          <input type="submit" value="Submit" />
          </form>
      </div>
    )
};
export default AddTaskForm 