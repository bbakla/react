import React from 'react';
import './App.css';
import UseState from "./components/useState/UseState";
import UseEffect from "./components/useEffect/UseEffect";
import Header from "./components/header/Header";
import {Route, Switch} from "react-router-dom";
import UseContexts from "./components/useContext/UseContexts";
import UserReducer from "./components/useReducer/UserReducer";
import ToDoAppWithUseReducer from "./components/useReducer/ToDoApp/ToDoAppWithUseReducer";

function App() {
    return (
        <div className="container">
       <div className="row">
            <nav className="navbar navbar-default navbar-fixed-top">
            <Header/>
        </nav>
       </div>
        <div>
            <Switch>
                <Route exact path="/useStates" component={UseState}/>
                <Route exact path="/useEffect" component={UseEffect}/>
                <Route exact path="/useContext" component={UseContexts}/>
                <Route exact path="/useReducer" component={UserReducer}></Route>
                <Route exact path="/toDoApp" component={ToDoAppWithUseReducer}></Route>

            </Switch>


            </div>
        </div>
    )
}


export default App;
