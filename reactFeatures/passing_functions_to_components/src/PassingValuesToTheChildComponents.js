import React, {Component} from "react";

export class PassingValuesToTheChildComponents extends Component {

    showList = () => {

        return (
            this.props.names.map(name =>
                <li key={name} className="list-group-item">
                    {name}
                </li>
            ));
    }

    render() {
        return (
            <div>
            <ul key={this.props.names} className="list-group">
                {this.showList()}
            </ul>

                <button onClick={() => this.props.show(false)}>Hide again</button>
            </div>


        );
    }
}
