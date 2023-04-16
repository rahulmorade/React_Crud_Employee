import { BrowserRouter }  from "react-router-dom";
import Navbar             from "./Component/layout/Navbar";
import About              from "./Component/pages/About";
import Contact            from "./Component/pages/Contact";
import Home               from "./Component/pages/Home";
import AddEmployee        from "./Component/users/AddEmployee";
import Edit               from "./Component/users/Edit";
import {BrowserRouter
   as Router,Route,Switch,
   Redirect}              from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar />
      <Switch>

        <Route  path="/home"       component   =  {Home} />
        <Route  path="/about"      component   =  {About} />
        <Route  path="/contact"    component   =  {Contact} />
        <Route  exact path="/"     component   =  {AddEmployee} />
        <Route  path="/edit/:id"   component   =  {Edit} />
        
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
