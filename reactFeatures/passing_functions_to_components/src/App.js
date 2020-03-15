import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {PassingValuesToTheChildComponents} from "./PassingValuesToTheChildComponents";
import {PassingValuesToTheChildComponents2} from "./PassingValuesToTheChildComponents2";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            parameter: "",
            names: ["a", "b", "c"],
            showList: false,
            counter: 0
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
            return <PassingValuesToTheChildComponents key="passingfuncToComponent" names={this.state.names}
                                                      show={(showList) => this.setState({showList})} />
        }
        return null;
    }

   increaseCounter = (c) => {
       if (c == true) {
           this.setState({counter: this.state.counter + 1});
       }
   }

    render() {
        return <div>
            <button className="btn btn-success" onClick={this.handleClick}>Click me</button>

            <div className="container-fluid">
                <p className="m-2">{this.state.userName}</p>

            </div>

            <div className="container-fluid">
            <button className="btn btn-primary" onClick={() => this.handleClickWithParameter("Derin")}>Click me, I will
                pass "Derin" parameter
            </button>
                </div>

            <div className="container-fluid">
                <button className="btn btn-secondary" onClick={this.handleClickWithParameter.bind(this, "Derinco")}>Click
                    me, I will pass "Derinco" parameter
                </button>
                <p className="m-2">{this.state.userName}</p>
            </div>

            <div>
                <button className="btn btn-primary" onClick={this.sendDataToTheChild}>Show List</button>
                {this.getList()}
            </div>

            <div className="container-md">
                <div className="card card-deck">
                    <div className="card-header">
                        <p>Increase The Count</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{this.state.counter}</p>
                        <PassingValuesToTheChildComponents2 onCounter = {this.increaseCounter}/>

                    </div>
                </div>
            </div>
        </div>
    }
}
