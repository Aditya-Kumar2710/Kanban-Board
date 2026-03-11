import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Board from "./Components/Boards/Board";
import AddTask from "./Components/AddTask/AddTask";
function App() {
  const [showModal , setShowModal] = useState(false);
  const [search,setSearch] = useState("");
  const [tasks,setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("kanbanTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "dark";
  });
  useEffect(() => {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
  document.body.className = theme;
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
   <>
   <Navbar setShowModal={setShowModal} setSearch={setSearch} search={search} theme={theme} setTheme={setTheme} />
   <Board tasks={tasks} setTasks={setTasks} search={search}/>
   {showModal && (<AddTask tasks={tasks} setTasks={setTasks} setShowModal={setShowModal}/>)}
   </>
  );
}

export default App
