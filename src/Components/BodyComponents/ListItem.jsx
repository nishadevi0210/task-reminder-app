import { FaTimes } from "react-icons/fa";

const ListItem = (props) => {
    let listItem = props.listItem;
    let deleteListItem = props.onDelete;
    let addReminder = props.addReminder;
   
    return(
        <div className={"listItem " + (listItem.reminder ? "reminder" : "")} 
            onDoubleClick={() => {addReminder(listItem.id)}}>
                <h3> 
                    {listItem.text}
                    <FaTimes style={{color:"#900"}} 
                        onClick={() => {deleteListItem(listItem.id)}} />
                </h3>
                <p> {listItem.time} </p>
        </div> 
    )
}

export default ListItem;