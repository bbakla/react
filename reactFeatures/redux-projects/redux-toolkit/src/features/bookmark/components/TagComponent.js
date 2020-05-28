import React, {useState} from "react";

export default function ({addTagToBookmark, removeTagFromBookmark, tags}) {

    const removeTag = (tag) => {
        {removeTagFromBookmark(tag)}
    }

    const addTag = (event) => {
        {addTagToBookmark(event.target.value)}
        event.target.value="";
    }

    return (
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>

                        {/*<span className='tags-input'*/}
                        <span className='tag-close-icon'
                              onClick={() => removeTag(tag)}
                        >
							x
						</span>
                    </li>
                ))}
            </ul>
            <input className="enter-tag"
                type="text"
                onKeyUp={event => event.key === " " ? addTag(event) : null}
                placeholder="Press space to add tags"
            />
        </div>
    );

}
