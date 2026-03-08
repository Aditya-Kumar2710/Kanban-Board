import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Board from "./Components/Boards/Board";
import AddTask from "./Components/AddTask/AddTask";
function App() {
  const [showModal , setShowModal] = useState(false);

  const [tasks,setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("kanbanTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
   <>
   <Navbar setShowModal={setShowModal}/>
   <Board tasks={tasks} setTasks={setTasks}/>
   {showModal && (<AddTask tasks={tasks} setTasks={setTasks} setShowModal={setShowModal}/>)}
   </>
  );
}

export default App
