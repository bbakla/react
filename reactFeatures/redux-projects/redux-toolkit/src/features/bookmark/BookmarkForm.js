import React, {useState} from "react";
import {add} from "./bookmarkSlice";
import {useDispatch} from "react-redux";
import TagComponent from "./components/TagComponent";

export default function BookmarkForm() {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [tags, setTags] = useState([]);
    const [notes, setNotes] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(add({name, url, tags, notes}));
        setName("");
        setUrl("");
        setTags([]);
        setNotes("");

    }

    const addTagToBookmark = (tag) => {
            setTags(tags => [...tags, tag]);
    };

    const removeTagFromBookmark = (tag) => {
        setTags(tags => tags.filter(t => t !== tag))
    }

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
                    <TagComponent tags = {tags}
                                  addTagToBookmark ={addTagToBookmark}
                                      removeTagFromBookmark ={removeTagFromBookmark}/>
                </div>

                <button className="btn btn-outline-primary"> Save the bookmark</button>

            </form>

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
