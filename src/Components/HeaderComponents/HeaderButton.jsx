const HeaderButton = (props) => {

    const toggleAddTask = props.toggleAddTask;

    return (
            <button className="button" 
                onClick={() => toggleAddTask(true)}>
                Add new task
            </button>
    );
}

export default HeaderButton;