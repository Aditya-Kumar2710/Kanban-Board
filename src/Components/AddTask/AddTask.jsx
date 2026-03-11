import React,{ useState } from "react";
import "./AddTask.css";

function AddTask(props){
    const[title,setTitle] = useState("");
    const[description,setDescriptoion] = useState("");
    const[priority,setPriority] = useState("Medium");
    function handleTitle(event){
        setTitle(event.target.value)
    }
    function handleDescriptoion(event){
        setDescriptoion(event.target.value)
    }
    function handlePriority(event){
        setPriority(event.target.value)
    }
    function handleCreteTask(){
        if(title.trim() === ""){
        alert("Task title is required");
        return;
        }
        const newTask = {
            id: Date.now(),
            title: title,
            description: description,
            priority: priority,
            status: "todo",
            date: new Date().toLocaleDateString()
        };
        props.setTasks([...props.tasks,newTask]);
        props.setShowModal(false);
    }

    return(
        <div className="overlay">
            <div className="modal">
                <div className="modalHeader">
                    <h2>New Task</h2>
                    <button className="closeBtn" onClick={()=>{props.setShowModal(false)}}>X</button>
                </div>
                <div className="modalBody">
                    <label >Title *</label>
                    <input type="text" placeholder="What needs to be done?" value={title} onChange={handleTitle}/>

                    <label>Description</label>
                    <textarea placeholder="Add Description...." value={description} onChange={handleDescriptoion}></textarea>

                    <label>Priority</label>
                    <div className="priorityBtn">
                        <button className={`High ${priority ==="High" ? "highActive" : "" }`} value="High" onClick={handlePriority}>High</button>
                        <button className={`Medium ${priority ==="Medium" ? "medActive" : ""}`} value = "Medium" onClick={handlePriority}>Medium</button>
                        <button className={`Low ${priority ==="Low" ? "lowActive" : "" }`} value="Low" onClick={handlePriority}>Low</button>
                    </div>
                </div>
                <div className="modalFooter">
                    <button className="cancelBtn" onClick={()=>{props.setShowModal(false)}}>Cancel</button>
                    <button className="createBtn" onClick={handleCreteTask}>Create Task</button>
                </div>
            </div>
        </div>
    );
}

export default AddTask;