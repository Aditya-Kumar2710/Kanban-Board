import "./Navbar.css";

function Navbar({setShowModal}){
    return(
        <nav className="navbar">
            <div className="navLeft">
                <h2 className="webTitle">KanFlow</h2>
            </div>
            <div className="navCenter">
                <input className="search" type="text" placeholder="🔍Search tasks..." />
            </div>
            <div className="navRight">
                <button className="toggler">🌙</button>
                <button className="addTask" onClick={() => setShowModal(true)}>+ New Task</button>
            </div>
        </nav>
    );
}

export default Navbar;