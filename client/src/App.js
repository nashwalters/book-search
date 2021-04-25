import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Navbar from "./pages/Saved";
import "./App.css";

const App = () => {
  return ( 
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path ="/" component={Search}/>
          <Route exact path ="/saved" component={Saved}/>
        </Switch>
  </Router>
  );
}
 
export default App;


