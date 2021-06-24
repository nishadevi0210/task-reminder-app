const Header = (props) => {

    const toggleAddTask = props.toggleAddTask;

    return (
        <header className="title">
            <h2>Task-Reminder</h2>
            <button className="button" onClick={() => toggleAddTask(true)}>Add new task</button>
        </header>
    );
}

export default Header;