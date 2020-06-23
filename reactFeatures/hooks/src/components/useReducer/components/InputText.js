import React, {useState} from "react";

export default function InputText({cssStyle, defaultValue, inputClass, placeHolder, editToDo}) {

    const [value, setValue] = useState(defaultValue);
    const [disable, setDisable] = useState(true);

    const handleEnterButton = (e) => {
        if(e.key === "Enter") {
            editToDo(value);
            setDisable(true);
        }
    };

    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleClick = (e) => {
        if(e.type === "mouseover") {
            setDisable(false);
        } else if (e.type === "mouseleave") {
            setDisable(true);
        }

        if(disable) {
            editToDo(value);
        }
    }

    const border = {
        border: "none",
        //background: "#e9ecef"

    };
    const mergedStyle = {...cssStyle, ...border}

    return(
        <div className={inputClass}>
            <input key={value} value={value} name="name" id={value}
                   placeholder={placeHolder}
                   disabled={disable}
                   style = {mergedStyle}

                   onKeyUp={handleEnterButton}
                   onChange={handleChange}
                   onMouseOver={handleClick}
                   onMouseLeave={handleClick}
                   onFocus={() => console.log("onFocus")}
                   onBlur={() => console.log("onBlur")}
                   />
        </div>
    );

}
