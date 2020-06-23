import Todo from "./Todo";
import React, {useContext} from "react";
import {ToDoContext} from "../ToDoAppWithUseReducer";

export default function ToDoTableView({filter, showAll}) {
    const {todos} = useContext(ToDoContext);

    return(
        <table className="table">
            <thead>
            <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Tags</th>
            </tr>
            </thead>

            <tbody>
            {
                todos.map(todo =>
                    (filter === showAll ? true : todo.status === filter) && (<Todo key={todo.name + todo.tags} toDo={todo}/>
                    )

                )}
            </tbody>
        </table>
    );
}
