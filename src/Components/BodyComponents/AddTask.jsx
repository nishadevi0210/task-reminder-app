import React from "react";


const AddTask = (props) => {

    let addListItem = props.addListItem;
    let toggleAddTask = props.toggleAddTask;

    const [task, setTask] = React.useState("");
    const [time, setTime] = React.useState("");
    const [reminder, setReminder] = React.useState(false);
    // only one parameter in state manager

    const onSubmit = (event) => {
        event.preventDefault();

        if (task.trim() === "" || time.trim() === "") {
            alert("Set task and date & time first");
        } else {
            let randomNum = Math.floor( Math.random() * 10000 ) + 1;
            // let lastPosition = list.length - 1;
            // let newId = list[lastPosition].id + 1;
            // let newListItem = {...listItem, id: newId};
            let listItem = {id: randomNum, text: task, time: time, reminder: reminder};
            addListItem(listItem);
            setTask("");
            setTime("");
            setReminder(false);
            toggleAddTask(false);
        }
    }
        
    return (
        <form className="addForm">

            <div className="form-control">
                <label> Task: </label>
                <input type="text" placeholder="Add a task here..."
                    value={task}
                    onChange={e => setTask(e.target.value)}>
                </input>
            </div>

            <div className="form-control">
                <label> Date & Time: </label>
                <input type="datetime local" placeholder="Add date and time here..." 
                    value={time} 
                    onChange={e => setTime(e.target.value)}>
                </input>
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder:</label>
                <input type="checkbox" 
                    value={reminder} 
                    checked={reminder}
                    onChange={e => setReminder(e.target.checked)}>
                </input>
            </div>

            <button className="button blockButton" 
                onClick={onSubmit}>
                Save Task
            </button>

        </form>
    )

}
export default AddTask;