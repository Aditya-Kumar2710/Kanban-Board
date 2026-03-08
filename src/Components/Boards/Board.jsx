import "./Board.css";
import { DndContext } from "@dnd-kit/core";
import Column from "../Column/Column";

function Board({tasks, setTasks}) {
    function handleDragEnd(event){
        const{active,over}=event;
        if(!over) return;
        const updatedTasks = tasks.map((task) =>{
            if(task.id === active.id){
                return{
                    ...task,
                    status: over.id
                };
            }
            return task;
        });
        setTasks(updatedTasks);
        console.log(active.id);
        console.log(over.id);
    }
    return (
        <DndContext onDragEnd={handleDragEnd}>
        <div className="board">
            <div className="columns">
            <Column title="Todo" status="todo" tasks={tasks} setTasks={setTasks} />
            <Column title="In Progress" status="inprogress" tasks={tasks} setTasks={setTasks} />
            <Column title="Done" status="done" tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
        </DndContext>
    );
}

export default Board;