import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/FooterComponents/About.jsx";
import PageNotFound from "./Components/BodyComponents/PageNotFound.jsx";

const App = () => {
  return (
    <Router> 
      <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" component={Home} />
          <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;