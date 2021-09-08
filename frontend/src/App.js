import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Schedule from "./pages/schedule/Schedule";
function App() {
  return (
  <Router>
    <Header/>
    <div className="container">
      <Sidebar/>
      <Switch>
          <Route exact path="/">
            <Home />
            </Route>
            <Route path="/schedule">
            <Schedule />
          </Route>
            </Switch>
    </div>
    </Router>
  )
}

export default App;
