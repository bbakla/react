import React, { useState} from 'react'

import DropDownComponent from "./DropDownComponent";
import SearchComponent from "./SearchComponent";
import ToDoTableView from "./ToDoTableView";


export default function TodoList() {
    const showAll = "All";

    const [filter, setFilter] = useState(showAll)
    const [searchedTag, setSearchedTag] = useState('')


    return (
        <>
            <div className="row">
                <div className="col">
                    <DropDownComponent showAll={showAll} filter={filter} setFilter={setFilter}></DropDownComponent>
                </div>

                <div className="col float-right ml-5">
                <SearchComponent handleSearchedTag = {setSearchedTag}  />
                </div>
            </div>
            <ToDoTableView filter={filter} showAll={showAll} searchedTag = {searchedTag} />
        </>
    );
}
