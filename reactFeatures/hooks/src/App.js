import React from 'react';
import './App.css';
import UseState from "./components/useState/UseState";
import UseEffect from "./components/useEffect/UseEffect";
import Header from "./components/header/header";
import {Route} from "react-router-dom";

function App() {
return(
    <div>
        <Header/>

        <Route exact path="/useStates" component={UseState}/>
        <Route exact path="/useEffects" component={UseEffect}/>

    </div>
)
}

function header() {
    const  route = window.location.pathname;

    if (route ==="/useStates") {
        return (<UseState/>);
    } else if (route === "/useEffect") {
        return (<UseEffect/>);
    }

}

export default App;
