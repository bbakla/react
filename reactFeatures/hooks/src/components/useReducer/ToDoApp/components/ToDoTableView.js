import Todo from "./Todo";
import React, {useContext} from "react";
import {ToDoContext} from "../ToDoAppWithUseReducer";

export default function ToDoTableView({filter, showAll, searchedTag, clickedSearchItem}) {
    const {todos} = useContext(ToDoContext);

    const filterByStatus = (todo) => {
        return <Todo key={todo.name + todo.tags} toDo={todo}/>;
    }

    const displayCriteria = (todo) => {
        const filterCriteria = (filter === showAll ? true : todo.status === filter);
        const searchCriteria = searchedTag.length === 0 ? true : todo.tags.includes(searchedTag);
        const clickedTagItemCriteria = clickedSearchItem.length === 0 ? true : todo.tags.includes(clickedSearchItem);

        return filterCriteria && searchCriteria && clickedTagItemCriteria;
    }

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
                    displayCriteria(todo) && (filterByStatus(todo)))
            }
            </tbody>
        </table>
    );
}
