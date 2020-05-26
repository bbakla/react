import React, {useState} from "react";

import {add, edit, remove} from "./bookmarkSlice";
import {useDispatch, useSelector} from "react-redux";
import BookmarkForm from "./BookmarkForm";
import BookmarkList from "./bookmarkList";

const Bookmark = () => {



   /* const name = useFormInput("");
    const url = useFormInput("");
    const [tags, setTags] = useState([]);
    const notes = useFormInput("");*/



    return (
        <div className="container">
           <div className="row">
               <BookmarkForm/>
           </div>
            <div className="row">
                <BookmarkList/>
            </div>

        </div>
    )
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        console.log(e.target.name + " " + e.target.value);
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
}

export default Bookmark;
