import "./Navbar.css";

function Navbar({setShowModal,setSearch,search,theme,setTheme}){
    function handleSearch(event){
        setSearch(event.target.value);
    }
    function toggleTheme(){
    if(theme === "dark"){
        setTheme("light");
    }else{
        setTheme("dark");
    }
    }
    return(
        <nav className="navbar">
            <div className="navLeft">
                <span className="icon">⬡</span>
                <span className="webTitle">TrackiFY</span>
            </div>
            <div className="navCenter">
                <div className="searchIcon">🔍</div>
                <input className="search" type="text" placeholder="Search tasks..." value={search} onChange={handleSearch} />
            </div>
            <div className="navRight">
                <button className="toggler" onClick={toggleTheme}>{theme === "dark" ? "🌙" : "☀️"}</button>
                <button className="addTask" onClick={() => setShowModal(true)}>
                <span className="addIcon">+</span>
                <span className="addText">  New Task</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;