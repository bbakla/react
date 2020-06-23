import React, {useContext, useEffect, useState} from 'react'
import Todo from './Todo'
import {ToDoContext} from "../ToDoAppWithUseReducer";
import {Dropdown, DropdownToggle, DropdownItem} from 'reactstrap';
import TASK_STATUS from "./TaskStatus";
import DropDownComponent from "./DropDownComponent";
import SearchComponent from "./SearchComponent";
import ToDoTableView from "./ToDoTableView";


export default function TodoList() {
    const showAll = "All";

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
            <ToDoTableView filter={filter} showAll={showAll}/>
        </>
    );
}
