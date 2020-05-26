import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {

    return (<nav>
        <section>
            <NavLink to="/">Dashboard</NavLink> {" | "}
            <NavLink to="/posts">Posts</NavLink>
        </section>
    </nav>);
}
