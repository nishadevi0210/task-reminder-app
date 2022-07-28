function NoTask(props) {
    const name = props.name;
    return (
        <div className="listItem">
            <p>No task to do</p>
            {name + ", "}
            <p>You are done for today!</p>
        </div>
    )
}

export default NoTask;