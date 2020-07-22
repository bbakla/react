import React, {useState} from 'react'

import DropDownComponent from "./DropDownComponent";
import SearchComponent from "./SearchComponent";
import ToDoTableView from "./ToDoTableView";
import AllTags from "./AllTags";


export default function TodoList() {
    const showAll = "All";

    const [filter, setFilter] = useState(showAll)
    const [searchedTag, setSearchedTag] = useState('')
    const [clickedSearchItem, setClickedSearchItem] = useState("");
    const [resetSearchBox, setResetSearchBox] = useState(0);


    const resetFilter = () => {
        setSearchedTag("");
        setClickedSearchItem("");
        setResetSearchBox(prev => prev + 1);
    }

   // const filterCss = clickedSearchItem.length === 0 || searchedTag.length === 0 ? "fa fa-eye" : "fa fa-eye-slash";

    return (

        <>
            <div className="row">
                <div className="col">
                    <DropDownComponent showAll={showAll} filter={filter} setFilter={setFilter}></DropDownComponent>
                </div>

                <div className="col float-right ml-5">
                    <SearchComponent key={resetSearchBox} handleSearchedTag={setSearchedTag}/>
                </div>
                <div className="col float-right ml-5">
                    <button className="btn btn-outline-primary" onClick={resetFilter
                    }>Reset
                    </button>
                </div>
                <div>

                </div>
            </div>

            <ToDoTableView filter={filter} showAll={showAll} searchedTag={searchedTag}
                           clickedSearchItem={clickedSearchItem}/>
            <AllTags handleClickedItem={setClickedSearchItem}/>
        </>
    );
}
