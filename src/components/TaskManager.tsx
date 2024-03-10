import "./TaskManager.css";
import { useTaskManager } from '../hooks/Custom/useTaskManager'; 
import "./TaskManager.css";

const TaskManager = () => {
 const {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    searchKeyword,
    setSearchKeyword,
 } = useTaskManager();

 return (
    <div className="container">
      <h1>Task Manager</h1>

      <div>
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="Search Task"
        />
      </div>

      <div className="task">
        <input
          type="text"
          onChange={(e) => addTask(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={() => addTask(searchKeyword)}>Add Task</button>
      </div>

      <ul className="container">
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                value={task.title}
                onChange={(e) => updateTask(task.id, { ...task, title: e.target.value })}
              />
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default TaskManager;

