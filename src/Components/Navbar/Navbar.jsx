import "./Navbar.css";

function Navbar({setShowModal,setSearch,search}){
    function handleSearch(event){
        setSearch(event.target.value);
    }
    return(
        <nav className="navbar">
            <div className="navLeft">
                <span className="icon">⬡</span>
                <span className="webTitle">KanFlow</span>
            </div>
            <div className="navCenter">
                <div className="searchIcon">🔍</div>
                <input className="search" type="text" placeholder="Search tasks..." value={search} onChange={handleSearch} />
            </div>
            <div className="navRight">
                <button className="toggler">🌙</button>
                <button className="addTask" onClick={() => setShowModal(true)}>
                <span className="addIcon">+</span>
                <span className="addText">  New Task</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;