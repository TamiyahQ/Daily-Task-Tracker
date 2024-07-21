import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
const [showAddTask, setShowAddTask]=useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Breakfast',
      day: 'July 25th at 10:00am',
      reminder: false,
    },
    {
      id: 2,
      text: 'Grocerys',
      day: 'July 25th at 5:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Tennis',
      day: 'July 30th at 2:00pm',
      reminder: true,
    },
  ]);

  const addTask = (task) =>{
    const id=Math.floor(Math.random()* 50000) + 1
    const newTask={id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ));
  };

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)}  showAdd={showAddTask} title='Daily Task Tracker' />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks Yet! :('
      )}
    </div>
  );
};

export default App;


