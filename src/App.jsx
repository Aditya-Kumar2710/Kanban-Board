import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Board from "./Components/Boards/Board";
import AddTask from "./Components/AddTask/AddTask";
function App() {
  const [showModal , setShowModal] = useState(false);
  const [tasks,setTasks] = useState([]);
  return (
   <>
   <Navbar setShowModal={setShowModal}/>
   <Board tasks={tasks} setTasks={setTasks}/>
   {showModal && (<AddTask tasks={tasks} setTasks={setTasks} setShowModal={setShowModal}/>)}
   </>
  );
}

export default App
