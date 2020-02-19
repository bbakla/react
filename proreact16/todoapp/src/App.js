import React, {Component} from 'react';
import {ToDoBanner} from "./ToDoBanner";
import {ToDoCreator} from "./ToDoCreator";
import {ToDoRow} from "./ToDoRow";
import {VisibilityControl} from "./VisibilityControl";
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "Susanne",
            items: [{action: "Buy Flowers", done: false},
                {action: "Read book", done: true},
                {action: "Go to the gym", done: false}],
            showCompleted: true
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
            },
            () => localStorage.setItem("todos", JSON.stringify(this.state)));
        }
    }

    toDoTableRows = (doneValue) => this.state.items.filter(i =>
        i.done === doneValue).map(i => 
   <ToDoRow key={i.action} item={i} callback={this.toggleToDo}/>);

    toggleToDo = (item) => this.setState({
        items: this.state.items.map(i => i.action === item.action ? {...i, done: !item.done} : i)
    });

    changeStateData = () => {
        this.setState({
            userName: this.state.userName === "Susanne" ? "Susanne" : "Baris"
        })
    }

    componentDidMount = () => {
        let data = localStorage.getItem("todos");
        this.setState(data != null ? JSON.parse(data) : {
            userName: "Adam",
            items: [{action: "Buy Flowers", done: false},
                {action: "Read book", done: true},
                {action: "Go to the ii", done: false}],
            showCompleted: true
        })
    }

    render() {
        return (
        <div>
        <ToDoBanner name ={this.state.userName} tasks={this.state.items} />

            <div className="container-fluid">
               <ToDoCreator callback = {this.createNewToDo} />
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr><th>Description</th><th>Done</th></tr>
                    </thead>
                    <tbody>{this.toDoTableRows(false)}</tbody>
                </table>

                <div className="bg-secondary text-white text-center p-2">
                    <VisibilityControl description="Completed Tasksssssss"
                    isChecked = {this.state.showCompleted}
                    callback = {(checked) => this.setState({showCompleted: checked})}
                    />
                </div>

                {this.state.showCompleted && 
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done</th>
                            </tr>
                        </thead>
                        <tbody>{this.toDoTableRows(true)}</tbody>
                    </table>
                }
            </div>

        <button className= "btn btn-primary m-2" onClick={this.changeStateData}>
            Change
        </button>
        </div>
    );
    }
}
