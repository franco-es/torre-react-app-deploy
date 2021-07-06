import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./Components/NavigationBar";
import Inicio from "./Components/Inicio";
import MyGenome from "./Components/genome/MyGenome";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/me">
          <MyGenome />
        </Route>
        <Route path="/jobsPeople">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
