import { useState } from 'react'
import CreateTask from './components/createTask'
import ListTasks from './components/ListTasks'

function App() {
  const [tasks, setTasks] = useState([])

  console.log("tasks", tasks)

  return (
    <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-3 gap-16">
        <CreateTask  tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
