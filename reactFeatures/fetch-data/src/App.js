/*
* Resource: https://www.robinwieruch.de/react-hooks-fetch-data
* */

import FetchWithHooks from "./FetchWithHooks";
import FetchWithHooksAndUseReducer from "./FetchWithHooksAndUseReducer";
import Header from "./components/header/Header";
import React from "react";
import {Route, Switch} from "react-router-dom";
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
                    <Route exact path="/fetchWithHooks" component={FetchWithHooks}/>
                    <Route exact path="/fetchWithHooksAndReducer" component={FetchWithHooksAndUseReducer}/>
                </Switch>


            </div>
        </div>

    );
}

export default App;
