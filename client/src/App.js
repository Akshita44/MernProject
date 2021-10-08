import './App.css';
import Navbar from "./Navbar";
import {BrowserRouter as Router,NavLink,Route,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Error from "./error"
import Contact from "./Contact";
import Logout from "./Logout";
import React, { useReducer } from 'react';
import {reducer,initialstate} from "./reducer/reducer";
export const context=React.createContext();
function App() {
  const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <>
    <context.Provider value={{state,dispatch}}>
    <Router>
    <Navbar/>
     <Switch>
       <Route exact path="/"><Home/></Route>
       <Route path="/Home"><Home/></Route>
       <Route path="/About"><About/></Route>
       <Route path="/Login"><Login/></Route>
       <Route path="/Signup"><Signup/></Route>
       <Route path="/Contact"><Contact/></Route>
       <Route path="/Logout"><Logout/></Route>
       <Route><Error/></Route>
     </Switch>
    </Router>
    </context.Provider>
    </>
  );
}
// #61dafb

export default App;
