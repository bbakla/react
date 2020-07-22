import React, {useContext} from "react";
import {ToDoContext} from "../ToDoAppWithUseReducer";


export default function AllTags({handleClickedItem}) {
    const {allTags} = useContext(ToDoContext);

    const handleClick = (t) => {
            handleClickedItem(t)
    }
    return(
        <ul>
            {
                allTags.map(t =>
                <li key={t} className="tag-as-list">
                <span>
                    <a href="#" className="btn btn-outline-primary active" onClick={() => handleClick(t)} >{t}</a></span>
                    </li>
                )
            }
        </ul>
    );
}
