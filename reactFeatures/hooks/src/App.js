import React from 'react';
import './App.css';
import UseState from "./components/useState/UseState";
import UseEffect from "./components/useEffect/UseEffect";
import Header from "./components/header/Header";
import {Route, Switch} from "react-router-dom";
import UseContexts from "./components/useContext/UseContexts";
import UserReducer from "./components/useReducer/UserReducer";

function App() {
    return (
        <div>
            <Header/>

            <Switch>
                <Route exact path="/useStates" component={UseState}/>
                <Route exact path="/useEffect" component={UseEffect}/>
                <Route exact path="/useContext" component={UseContexts}/>
                <Route exact path="/useReducer" component={UserReducer}></Route>
            </Switch>

        </div>
    )
}

function header() {
    const route = window.location.pathname;

    if (route === "/useStates") {
        return (<UseState/>);
    } else if (route === "/useEffect") {
        return (<UseEffect/>);
    }

}

export default App;
