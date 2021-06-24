import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Components/HeaderComponents/Header.jsx";
import NoTask from "./Components/BodyComponents/NoTask.jsx";
import AddTask from "./Components/BodyComponents/AddTask.jsx";
import List from "./Components/BodyComponents/List.jsx";
import Footer from "./Components/FooterComponents/Footer.jsx";
import About from "./Components/FooterComponents/About.jsx";

const App = () => {

  const [list, setList] = React.useState([]);
  const [showAddTask, setAddTask] = React.useState(false);

  const toggleAddTask = (state) => {
    setAddTask(state);
  }

  const addListItem = (listItem) => {
    let newlist = [...list, listItem];
    setList(newlist);
  }

  const deleteListItem = (itsId) => {
    let newList = list.filter((listItem) => listItem.id !== itsId);
    setList(newList);
  }

  const addReminder = (itsId) => {
    let invertReminderValue = list.map((listItem) =>
	    listItem.id === itsId 
	    ? {...listItem, reminder : !listItem.reminder}
	    : listItem
    )
    setList(invertReminderValue);
  }

  return (
    <Router>  
      <div className="container">

          <Header toggleAddTask={toggleAddTask} />
          { showAddTask 
            && <AddTask 
                addListItem={addListItem} 
                toggleAddTask={toggleAddTask} 
              />
          }
          { list.length === 0 
            ? <NoTask />
            : <List listState={list} onDelete={deleteListItem} addReminder={addReminder} />
          }
          <Route path="/about" component={About} />
          <Footer />

      </div>
    </Router>
  );
}

export default App;

//   const list = ['orange', 'apple', 'watermelon'];
//   list.map( list => <li> {list} </li> );
  2