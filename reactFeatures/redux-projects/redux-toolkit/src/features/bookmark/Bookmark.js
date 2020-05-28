import React, {useState} from "react";

import {add, edit, remove} from "./bookmarkSlice";
import {useDispatch, useSelector} from "react-redux";
import BookmarkForm from "./BookmarkForm";
import BookmarkList from "./bookmarkList";

const Bookmark = () => {

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

export default Bookmark;
