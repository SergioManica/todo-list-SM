import iconSun from "./assets/icon-sun.svg";

function Todolist() {
  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <h1>TODO</h1>
        <button>
          <img src={iconSun} />
        </button>
      </div>
      <div className="tasks">
        <div className="task current-type">
          <div className="decorative-checkbox"></div>
          <input type="text" placeholder="Current typing..." id="text" />
        </div>
        <div className="task">
          <input type="checkbox" id="rounded-checkbox-0" />
          <label htmlFor="rounded-checkbox-0">
            Complete online javascript Course
          </label>
        </div>
        <hr />
        <div className="task">
          <input type="checkbox" id="rounded-checkbox-1" />
          <label htmlFor="rounded-checkbox-1">Jog arround the park 3x</label>
        </div>
        <hr />
        <div className="task">
          <input type="checkbox" id="rounded-checkbox-2" />
          <label htmlFor="rounded-checkbox-2">10 minutes meditation</label>
        </div>
        <hr />
        <div className="task">
          <input type="checkbox" className="circle" id="rounded-checkbox-3" />
          <label htmlFor="rounded-checkbox-3">Read for 1hour</label>
        </div>
        <hr />
        <div className="task">
          <input type="checkbox" id="rounded-checkbox-4" />
          <label htmlFor="rounded-checkbox-4">Pick up groceries</label>
        </div>
        <hr />
        <div className="task">
          <input type="checkbox" id="rounded-checkbox-5" />
          <label htmlFor="rounded-checkbox-5">
            Complete todoApp on front-end Mentor
          </label>
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
