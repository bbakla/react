import React, {Component} from "react";
import {

    Link,
    useParams,
    useRouteMatch, BrowserRouter
} from "react-router-dom";
import Home from "./home";
import Topics from "./topics";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default class NestingExample extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/topics">
                            <Topics />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}


