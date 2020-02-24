import React, {Component} from "react";

export class AddApplication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repoInfo:{name: "", identifier: "", tags:[{tagName:""}]},
            appIdentifier:""
        }
    }

    updateAppIdentifier = (event) => {
        this.setState({
            appIdentifier : event.target.value
        })
    }

    getRepoInfo = () => {
        this.state = {
            repoInfo:{name: "newAppRepo", identifier: this.state.appIdentifier, tags: [{tagName:"tagInApp"}]
        }}

        this.props.callback(this.state.repoInfo)

        this.setState({
            repoInfo: {name: "", identifier: "", tags:[]},
            appIdentifier:""
        })
    }

    render = () =>
        <div className="my-1">
            <input className="form-control" value={this.state.appIdentifier}
            onChange={this.updateAppIdentifier}/>

            <button className="btn btn-primary mt-1"
            onClick={this.getRepoInfo}> Add</button>
        </div>
}
