import ListItem from "./ListItem.jsx";


const List = (props) => {

    let list = props.listState;
    let deleteListItem = props.onDelete;
    let addReminder = props.addReminder;
    
    return (
        <div>{
            list.map((listItem) => {
                return (
                    <ListItem key={listItem.id} 
                        listItem={listItem} 
                        onDelete={deleteListItem} 
                        addReminder={addReminder} 
                    />    
                )
            })
        }</div>        
    )
}

export default List;