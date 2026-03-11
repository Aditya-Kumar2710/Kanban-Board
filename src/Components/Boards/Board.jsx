import { useState } from "react";
import "./Board.css";
import { DndContext,DragOverlay,useSensor,useSensors,PointerSensor,TouchSensor } from "@dnd-kit/core";
import Column from "../Column/Column";
import Taskcard from "../TaskCard/Taskcard";
function Board({tasks, setTasks,search}) {
    const [activeTask, setActiveTask] = useState(null);
    function handleDragStart(event){
        const dragged = tasks.find(task => task.id === event.active.id);
        setActiveTask(dragged);
    }
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
        setActiveTask(null);
        // console.log(active.id);
        // console.log(over.id);
    }
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor,{
        activationConstraint: {
        delay: 200,
        tolerance: 8,
        },
        })
    );
    return (
        <DndContext sensors = {sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="board">
            <div className="columns">
            <Column title="Todo" status="todo" tasks={tasks} setTasks={setTasks} search={search} />
            <Column title="In Progress" status="inprogress" tasks={tasks} setTasks={setTasks} search={search} />
            <Column title="Done" status="done" tasks={tasks} setTasks={setTasks} search={search} />
            </div>
            <DragOverlay>
            {activeTask ? <Taskcard task={activeTask} /> : null}
            </DragOverlay>
        </div>
        </DndContext>
    );
}

export default Board;