import React from "react";
import {Link} from "react-router-dom";

export default function HomePage() {
    return (<div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>Learning React and Flux</p>

        <Link to="about" className="btn btn-primary">About</Link>

    </div>);
}
