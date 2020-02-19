import React, {Component} from 'react';
import {ToDoBanner} from "./ToDoBanner";
import {ToDoCreator} from "./ToDoCreator";
import {ToDoRow} from "./ToDoRow";
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "Adam",
            items: [{action: "Buy Flowers", done: false},
                {action: "Read book", done: true},
                {action: "Go to the gym", done: false}],
        }
    }

    updateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value})
    }

    createNewToDo = (task) => {
        if (!this.state.items.find(i => i.action === task)) {
            this.setState({
                items: [...this.state.items,
                    {action: task, done:false}]

            });
        }
    }

    toDoTableRows = () => this.state.items.map(i =>
   <ToDoRow key={i.action} item={i} callback={this.toggleToDo}/>
    );

    toggleToDo = (item) => this.setState({
        items: this.state.items.map(i => i.action === item.action ? {...i, done: !item.done} : i)
    });

    changeStateData = () => {
        this.setState({
            userName: this.state.userName === "Adam" ? "Bob" : "Adam"
        })
    }

    render() {
        return (
        <div>
        <ToDoBanner name ={this.state.userName} tasks={this.state.items} />

            <div className="container-fluid">
               <ToDoCreator callback = {this.createNewToDo()} />
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr><th>Description</th><th>Done</th></tr>
                    </thead>
                    <tbody>{this.toDoTableRows()}</tbody>
                </table>
            </div>

        <button className= "btn btn-primary m-2" onClick={this.changeStateData}>
            Change
        </button>
        </div>
    );
    }
}
