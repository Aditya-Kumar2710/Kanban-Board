import Taskcard from "../TaskCard/Taskcard";
import { useDroppable } from "@dnd-kit/core";
import "./Column.css";

function Column({ title, status, tasks,setTasks,search }) {
    const filteredTasks = tasks.filter((task) => {
        
        if (task.status !== status) return false;
        if (!search) return true;
        const text = search.toLowerCase();
       return (
            task.title.toLowerCase().includes(text) ||
            task.description.toLowerCase().includes(text)
       );
    });
    const {setNodeRef, isOver} = useDroppable({
        id: status
    });
    return (
        <div className="column">
        <div className="header">
            <h3 className="title">{title}</h3>
            <span className="taskCount">{filteredTasks.length}</span>
        </div>

        <div className="divider"></div>

        <div className={`container ${isOver ? "dragOver" : ""}`} ref={setNodeRef}>
           { filteredTasks.map((task)=>(
            <Taskcard key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
           ))}
            {filteredTasks.length === 0 &&
            (<div className="empty">
                
                <p>No task here</p>
                <span>Drag a card or add a new task</span>
                
            </div>)}
        </div>
        </div>
    );
}

export default Column;

