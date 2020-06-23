import React, {useContext} from "react";
import {ToDoContext} from "../ToDoAppWithUseReducer";


export default function AllTags() {
    const {allTags} = useContext(ToDoContext);

    return(
        <ul>
            {
                allTags.map(t =>
                <li key={t} className="tag-as-list">
                <span className='tag-title'>{t}</span>
                    </li>
                )
            }
        </ul>
    );

}
