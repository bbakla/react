import React, {useState} from "react";

export default function ({addTag, removeTag, tags}) {

    const handleAddTag = (event) => {
        {addTag(event.target.value)}
        event.target.value="";
    }

    return (
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>

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
                   onKeyUp={event => event.key === " " || event.key === "Enter" ? handleAddTag(event) : null}
                   placeholder="Press space to add tags"
            />
        </div>
    );

}
