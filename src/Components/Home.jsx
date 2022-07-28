import React from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import HeaderTitle from "./HeaderComponents/HeaderTitle.jsx";
import HeaderButton from "./HeaderComponents/HeaderButton.jsx";
import NoTask from "./BodyComponents/NoTask.jsx";
import AddTask from "./BodyComponents/AddTask.jsx";
import List from "./BodyComponents/List.jsx";
import Footer from "./FooterComponents/Footer.jsx";

const Home = () => {
    let {name} = useParams();

    const [list, setList] = React.useState([]);
    const [showAddTask, setAddTask] = React.useState(false);

    React.useEffect(() => {
        const getList = async () => {
            const listFromServer = await fetchList();
            setList(listFromServer);
        }
        getList();
    }, []); //This second argument tells useEffect to only render if certain values have changed.

    const fetchList = async () => {
        try {
            let endpoint = "http://localhost:5000/tasks";
            const response = await axios.get(endpoint);
            return response.data;    
        } catch (error) {
            console.log("error", error);
        }
    }

    const toggleAddTask = (state) => {
        setAddTask(state);
    }

    const addListItem = async (listItem) => {

        try {
            await axios.post("http://localhost:5000/tasks/", listItem);
        } catch (error) {
            console.log("error", error);
        }

        let newlist = [...list, listItem];
        setList(newlist);
    }

    const deleteListItem = async (itsId) => {
        try {
            await axios.delete("http://localhost:5000/tasks/" + itsId);      
        } catch (error) {
            console.log("error", error);
        }
        
        let newList = list.filter((listItem) => listItem.id !== itsId);
        setList(newList);
    }

    const addReminder = async (itsId) => {
        let invertReminderValue = list.map((listItem) =>
            listItem.id === itsId 
            ? {...listItem, reminder : !listItem.reminder}
            : listItem
        )
        setList(invertReminderValue);
    }

    return (
        <div className="container">
            <header className="title">
                <HeaderTitle />
                <HeaderButton toggleAddTask={toggleAddTask} />
            </header>
            
            { showAddTask 
              && <AddTask 
                  addListItem={addListItem} 
                  toggleAddTask={toggleAddTask} 
                />
            }
            { list.length === 0 
              ? <NoTask name={name} />
              : <List listState={list} onDelete={deleteListItem} addReminder={addReminder} />
            }
            <Footer />
        </div>
    )
}

export default Home
