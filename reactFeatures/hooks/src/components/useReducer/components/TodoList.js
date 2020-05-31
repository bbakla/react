import React, {useContext} from 'react'
import Todo from './Todo'
import {ToDoContext} from "../ToDoAppWithUseReducer";

export default function TodoList() {

    const {todos} = useContext(ToDoContext);
    return (

        <table className="table">
            <thead>
            <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Tags</th>
            </tr>
            </thead>

            <tbody>
            {todos.map(todo => (
                <Todo key= {todo.name} toDo={todo}/>
            ))}
            </tbody>

        </table>
    );
}
