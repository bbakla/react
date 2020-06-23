import React, {useContext, useEffect, useState} from 'react'
import Todo from './Todo'
import {ToDoContext} from "../ToDoAppWithUseReducer";
import {Dropdown, DropdownToggle, DropdownItem} from 'reactstrap';
import TASK_STATUS from "./TaskStatus";
import DropDownComponent from "./DropDownComponent";
import SearchComponent from "./SearchComponent";


export default function TodoList() {
    const showAll = "All";

    const {todos} = useContext(ToDoContext);
    const [filter, setFilter] = useState(showAll)

    return (
        <>
            <div className="row">
                <div className="col">
                    <DropDownComponent showAll={showAll} filter={filter} setFilter={setFilter}></DropDownComponent>

                </div>

                <div className="col float-right ml-5">
                <SearchComponent/>
                </div>


            </div>

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
        </>
    );
}
