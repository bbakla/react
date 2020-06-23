import React, {useContext, useEffect, useState} from 'react'
import Todo from './Todo'
import {ToDoContext} from "../ToDoAppWithUseReducer";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import TASK_STATUS from "./TaskStatus";


export default function TodoList() {
    const showAll = "All";

    const [dropDownOpen, setDropDownOpen] = useState(false);
    const {todos} = useContext(ToDoContext);
    const [filter, setFilter] = useState(showAll)


    const toggleDropDown = () => setDropDownOpen(prevState => !prevState);


    return (
        <>
            <Dropdown isOpen={dropDownOpen} toggle={toggleDropDown}>
                <DropdownToggle caret>
                    {filter}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => setFilter(showAll)}>All</DropdownItem>
                    <DropdownItem onClick={() => setFilter(TASK_STATUS.COMPLETED)}>Completed</DropdownItem>
                    <DropdownItem onClick={() => setFilter(TASK_STATUS.IN_PROGRESS)}>In Progress</DropdownItem>
                    <DropdownItem onClick={() => setFilter(TASK_STATUS.TODO)}>To Do</DropdownItem>
                </DropdownMenu>
            </Dropdown>

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
                        (filter === showAll ? true : todo.status === filter) && (<Todo key={todo.name} toDo={todo}/>
                        )

                   )}
                </tbody>

            </table>
        </>
    );
}
