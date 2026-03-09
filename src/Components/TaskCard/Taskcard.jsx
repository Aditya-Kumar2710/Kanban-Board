import React,{useState} from "react";
import { useDraggable } from "@dnd-kit/core";
import "./Taskcard.css";

function Taskcard({task,tasks,setTasks}) {
    const [isEditing,setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [priority, setPriority] = useState(task.priority);
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
        id: task.id
    });
    const style = transform ?{transform : `translate(${transform.x}px,${transform.y}px)`,} : undefined;
    function handleTitle(event){
        setTitle(event.target.value)
    }
    function handleDescription(event){
        setDescription(event.target.value)
    }
    function handlePriority(event){
        setPriority(event.target.value)
    }
    function handleSave(){
        const updatedTasks = tasks.map((t)=>{
            if(t.id === task.id){ 
                return {...t,title,description,priority};
            }
            return t;
        });
        setTasks(updatedTasks);
        setIsEditing(false);
    }
    function handleDelete(){
        const updatedTasks = tasks.filter((t)=>t.id !== task.id);
        setTasks(updatedTasks);
    }
    if(isEditing){
    
        return(
            <div className="editor">
                <div className="editText">
                <input className="editInp" placeholder="Edit Tile..." value={title} onChange={handleTitle} />
                <textarea className="editDesc" placeholder="Edit Description..." value={description} onChange={handleDescription} ></textarea>
                </div>
                <div className="priorityBtn">
                        <button className= {`High ${priority ==="High" ? "highActive" : "" }`} value="High" onClick={handlePriority}>High</button>
                        <button className={`Medium ${priority ==="Medium" ? "medActive" : ""}`} value = "Medium" onClick={handlePriority}>Medium</button>
                        <button className={`Low ${priority ==="Low" ? "lowActive" : "" }`} value="Low" onClick={handlePriority}>Low</button>
                </div>
                <div className="editBtn">
                <button className="editSave" onClick={handleSave}>Save</button>
                <button className="editcancle" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            </div>
        );
    }
    return (
        <div className="taskCard" ref={setNodeRef} style={style} {...listeners} {...attributes} >
            <div className={priority === "High" ? "HP" : priority === "Medium" ? "MP" : "LP"} >
               {task.priority}
            </div>
            <h4 className="taskTitle">{task.title}</h4>
            <p className="description">{task.description}</p>
            <div className="footer">
                <span className="date">{task.date}</span>
                <div className="tool">
                <button className="edit" onPointerDown={(event)=>event.stopPropagation()} onClick={() => setIsEditing(true)}>✏️</button>
                <button className="delete" onPointerDown={(event)=>event.stopPropagation()} onClick={handleDelete}>🗑️</button>
                </div>
            </div>
        </div>
    );
}
export default Taskcard;