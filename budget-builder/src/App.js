import logo from './logo.svg';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import addBudget from "./components/budget-add.component";
import BudgetDisp from "./components/budget-display.component";
import deleteBudget from "./components/budget-delete.component";
import Home from "./components/home.component";

function App() {
  return (
    <Router>
    <Navbar />
    <br/>
    <Route path="/" exact component={Home} />
    <Route path="/budget" exact component={BudgetDisp} />
    <Route path="/deleteBudget" exact component={deleteBudget} />
    <Route path="/addBudget" component={addBudget} />
    
    
  </Router>
  );
}

export default App;
