import React, {useState} from "react";

export default function SearchComponent({handleSearchedTag}) {

    const [searchVariable, setSearchVariable] = useState("");

    const handleInput = (event) => {
        event.preventDefault();
        handleSearchedTag(searchVariable)
    }

    return (
        <>
                <input className="form-control"
                       type="text"
                       placeholder="Search..."
                       value ={searchVariable}
                       onChange={event => setSearchVariable(event.target.value)}
                       onKeyUp={event => event.key === "Enter" ? handleInput(event) : null}
                />
        </>
    );
}
