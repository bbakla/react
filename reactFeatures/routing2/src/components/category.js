import React, {Component} from "react";
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import {CategoryItem} from "./CategoryItem";

export const Category = () => {

        let { path, url } = useRouteMatch();

        return (
            <div className="text-body text-center">
                <h2>Topics</h2>
                <ul >
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
                    <Route exact path={`${url}/:item`} component={CategoryItem}/>
                </Switch>

            </div>
        );

}

