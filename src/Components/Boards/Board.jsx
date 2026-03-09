import "./Board.css";
import { DndContext,useSensor,useSensors,PointerSensor,TouchSensor } from "@dnd-kit/core";
import Column from "../Column/Column";

function Board({tasks, setTasks,search}) {
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
        <DndContext sensors = {sensors} onDragEnd={handleDragEnd}>
        <div className="board">
            <div className="columns">
            <Column title="Todo" status="todo" tasks={tasks} setTasks={setTasks} search={search} />
            <Column title="In Progress" status="inprogress" tasks={tasks} setTasks={setTasks} search={search} />
            <Column title="Done" status="done" tasks={tasks} setTasks={setTasks} search={search} />
            </div>
        </div>
        </DndContext>
    );
}

export default Board;