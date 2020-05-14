
import React, {Component} from "react";
import {Link, useParams, useRouteMatch} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Topic from "./topic";

export default class Topics extends Component {
    render = () => {

        let { path, url } = useRouteMatch();
        console.log(path);
        console.log(url);

        console.log("------------------")

        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/:topicId`}>
                        <Topic />
                    </Route>
                </Switch>
            </div>
        );
    }
}


