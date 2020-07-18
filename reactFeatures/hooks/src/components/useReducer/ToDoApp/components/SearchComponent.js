import React, {useContext, useEffect, useState} from "react";
import {ToDoContext} from "../ToDoAppWithUseReducer";


export default function SearchComponent({handleSearchedTag}) {

    const {searchTagItem} = useContext(ToDoContext);
    const [searchVariable, setSearchVariable] = useState("");


    const handleInput = (event) => {
        handleSearchedTag(event.target.value)

    }

    const resetInput = () => {
        setSearchVariable("");
    }

    useEffect(() => {
        console.log(searchTagItem)
        setSearchVariable(searchTagItem)
    }, [])

    return (
        <>
            <form className="input-group">
                <input className="form-control"
                       type="text"
                       placeholder="Search..."
                       value={searchVariable}
                       onChange={event => setSearchVariable(event.target.value)}
                       onKeyUp={event => event.key === "Enter" ? handleInput(event) : null}
                />
                <button className="btn btn-outline-primary" onClick={resetInput}>Reset</button>
            </form>
        </>
    );
}
