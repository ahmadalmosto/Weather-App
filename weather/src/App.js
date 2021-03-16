import CityInfo from "./CityInfo";
import CityChar from "./CityChar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CityInfo} />
          <Route exact path="/char/:id" component={CityChar} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
