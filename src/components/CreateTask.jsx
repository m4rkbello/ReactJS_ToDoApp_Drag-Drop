import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ tasks, setTasks }) => {

   const [task, setTask] = useState({
        id: "",
        name: "",
        status: "TODO", // also be in progress or closed!
   });

   useEffect(() => {
    console.log("Component mounted or updated");
 }, [tasks]); // Log when tasks change

 const handleSubmit = (e) => {
    e.preventDefault();
    //state properties
    setTasks((prev) => {
        const newList = [...prev, task];
        localStorage.setItem("tasks", JSON.stringify(newList)); //save as an array tapos e convert into string tas e labay sa components!
        return newList;
    });
};
    
    return ( 
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
                value={task.name} 
                onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
            />
            <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">Create</button>
        </form>
     );
}
 
export default CreateTask;
