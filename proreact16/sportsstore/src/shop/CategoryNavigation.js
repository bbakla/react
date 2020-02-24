import React, {Component} from "react";
import {Link} from "react-router-dom";

export class CategoryNavigation extends Component {

    render() {

        return <React.Fragment>
            <Link to={this.props.baseUrl} className="btn btn-secondary btn-block">
                All</Link>
            {this.props.categories && this.props.categories.map(c =>
                <Link className="btn btn-secondary btn-block" key={c}
                    to={`${this.props.baseUrl}/${c.toLowerCase()}`}>
                    {c}
                </Link>

            )}
        </React.Fragment>
    }

}
