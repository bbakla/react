import React from 'react';
import './App.css';
import UseEffect from "./components/useEffect/UseEffect";
import Header from "./components/header/Header";
import {Route, Switch} from "react-router-dom";
import UseContexts from "./components/useContext/UseContexts";
import UserReducer from "./components/useReducer/UserReducer";
import ToDoAppWithUseReducer from "./components/useReducer/ToDoApp/ToDoAppWithUseReducer";
import ObjectStateVariable from "./components/useState/ObjectStateVariable";
import InputForm from "./components/useState/InputForm";
import ArrayStates from "./components/useState/ArrayStates";
import CountClicker from "./components/useState/CountClicker";

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
                <Route exact path="/useEffect" component={UseEffect}/>
                <Route exact path="/useContext" component={UseContexts}/>
                <Route exact path="/useReducer" component={UserReducer}></Route>
                <Route exact path="/toDoApp" component={ToDoAppWithUseReducer}></Route>
                <Route exact path="/useStates/objectstate" component={ObjectStateVariable}></Route>
                <Route exact path="/useStates/inputform" component={InputForm}></Route>
                <Route exact path="/useStates/arraystate" component={ArrayStates}></Route>
                <Route exact path="/useStates/countclicker" component={CountClicker}></Route>



            </Switch>


            </div>
        </div>
    )
}


export default App;
