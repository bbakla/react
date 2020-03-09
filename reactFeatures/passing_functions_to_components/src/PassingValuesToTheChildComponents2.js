import React, {Component} from "react";

export class PassingValuesToTheChildComponents2 extends Component{

changeCounter = () => {
    this.props.onCounter(true);
}

    render() {
        return (<button className="btn btn-success"
            onClick={this.changeCounter}>Increase the count</button>);
    }
}
