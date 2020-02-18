import React, {Component} from 'react';
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
            newItemText: ""
        }
    }

    updateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value})
    }

    createNewToDo = () => {
        if (!this.state.items.find(i => i.action === this.state.newItemText)) {
            this.setState({
                items: [...this.state.items,
                    {action: this.state.newItemText, done:false}],
                newItemText:""
            })
        }
    }

    toDoTableRows = () => this.state.items.map(i =>
    <tr key={i.action}>
        <td>{i.action}</td>
        <td>
            <input type="checkbox" checked={i.done}
                onChange={() => this.toggleToDo(i)}/>
        </td>
    </tr>
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
        <h4 className="bg-primary text-white text-center p-2">
            {this.state.userName}'s To Do List
            ({this.state.items.filter(t => !t.done).length} items to do)
        </h4>

            <div className="container-fluid">
                <div className= "my-1">
                    <input className="form-control"
                           value={this.state.newItemText}
                           onChange={this.updateNewTextValue}/>
                    <button className="btn btn-primary mt-1" onClick={this.createNewToDo}>Add</button>
                </div>

            </div>

            <table className="table table-striped table-bordered">
                <thead>
                    <tr><th>Description</th><th>Done</th></tr>
                </thead>
                <tbody>{this.toDoTableRows()}</tbody>
            </table>
        <button className= "btn btn-primary m-2" onClick={this.changeStateData}>
            Change
        </button>
        </div>
    );
    }
}
