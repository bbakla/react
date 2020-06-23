import React, {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import TASK_STATUS from "./TaskStatus";

export default function DropDownComponent({filter, setFilter, showAll}) {
    //const showAll = "All";

    const [dropDownOpen, setDropDownOpen] = useState(false);
    //const [filter, setFilter] = useState(showAll)

    const toggleDropDown = () => setDropDownOpen(prevState => !prevState);

    return(
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
    );

}
