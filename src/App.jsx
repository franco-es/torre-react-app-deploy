import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./Components/NavigationBar";
import Inicio from "./Components/Inicio";
import MyGenome from "./Components/genome/MyGenome";
import JobsPeople from "./Components/JobsPeople";

function App() {
  return (
    <Router className="App">
      <NavigationBar />
      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/me">
          <MyGenome />
        </Route>
        <Route path="/jobsPeople">
          <JobsPeople />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
