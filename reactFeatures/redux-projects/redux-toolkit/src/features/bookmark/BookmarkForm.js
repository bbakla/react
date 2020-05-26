import React, {useState} from "react";
import {add} from "./bookmarkSlice";
import {useDispatch} from "react-redux";

export default function BookmarkForm() {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [tags, setTags] = useState([]);
    const [notes, setNotes] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(add({name, url, tags, notes}));

    }

    const handleTag = (event) => {

    };

    const handleName = e => {
        setName(e.target.value);
    };

    const handleUrl = e => {
        setUrl(e.target.value);
    };

    const handleNotes = e => {
        setNotes(e.target.value);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input value={name} name="name" id="name" placeholder="name" onChange={handleName}/>
                </div>

                <div className="form-group">
                    <input value={url} name="url" id="url" placeholder="url" onChange={handleUrl}/>
                </div>

                <div className="form-group">
                    <input value={notes} name="notes" id="notes" placeholder="notes" onChange={handleNotes}/>
                </div>

                <div className="form-group">
                    <input value={tags} name="tags" id="tags" placeholder="tags" onChange={handleTag}/>
                </div>

                <button className="button btn-primary">Create a new Tag</button>
            </form>

        </div>
    )
}
