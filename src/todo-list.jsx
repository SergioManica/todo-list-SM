import iconSun from "./assets/icon-sun.svg";

function Todolist() {
  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <h1>TODO</h1>
        <img src={iconSun} />
      </div>
      <div className="tasks">
        <div className="task current-type">
          <input type="checkbox" />
          Current typing
        </div>
        <div className="task">
          <input type="checkbox" />
          Complete online javascript Course
        </div>
        <hr />
        <div className="task">
          <input type="checkbox" />
          Jog arround the park 3x
        </div>
        <hr />
        <div className="task">
          <input type="checkbox" />
          10 minutes meditation
        </div>
        <hr />
        <div className="task">
          <input type="checkbox" className="circle" />
          Read for 1hour
        </div>
        <hr />
        <div className="task">
          <input type="checkbox" />
          Pick up groceries
        </div>
        <hr />
        <div className="task">
          <input type="checkbox" />
          Complete todoApp on front-end Mentor
        </div>
        <hr />
      </div>
      <div className="info-list task">
        <span>5 items left</span>
        <div className="buttons">
          <button className="btn-hover">All</button>
          <button className="btn-hover">Active</button>
          <button className="btn-hover">Completed</button>
        </div>
        <button className="btn-hover">Clear completed</button>
      </div>
    </div>
  );
}

export default Todolist;
