import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {PassingValuesToComponents} from "./PassingValuesToComponents";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            parameter: "",
            names: ["a", "b", "c"],
            showList: false
        }
    }

    handleClick = () => {
        console.log("clicked");
        this.setState({userName: "ada"});
    }

    handleClickWithParameter(name) {
        this.setState({userName: name});
    }

    sendDataToTheChild = () => {
        this.setState({showList: true});
    }

    getList = () => {
        if (this.state.showList) {
            return <PassingValuesToComponents key="passingfuncToComponent" names={this.state.names}
        show={(showList) => this.setState({showList})} />
        }
        return null;
    }


    render() {
        return <div>
            <button className="btn btn-success" onClick={this.handleClick}>Click me</button>

            <div className="container-fluid">
                <p className="m-2">{this.state.userName}</p>

            </div>

            <button className="btn btn-primary" onClick={() => this.handleClickWithParameter("Derin")}>Click me, I will
                pass "Derin" parameter
            </button>
            <br/>

            <div className="container-fluid">
                <button className="btn btn-primary" onClick={this.handleClickWithParameter.bind(this, "Derinco")}>Click
                    me, I will pass "Derinco" parameter
                </button>
                <p className="m-2">{this.state.userName}</p>
            </div>

            <div>
                <button className="btn btn-primary" onClick={this.sendDataToTheChild}>Show List</button>

                {this.getList()}
            </div>
        </div>
    }
}
