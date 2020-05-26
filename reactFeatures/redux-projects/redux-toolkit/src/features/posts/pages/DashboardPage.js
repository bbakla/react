import React from "react";
import {Link} from "react-router-dom";

export const DashboardPage = () => (
    <section>
        <h1>Dashboard</h1>
        <p>Posts dashboard</p>
        <Link to="/posts" className="button">View Posts</Link>
    </section>
)
