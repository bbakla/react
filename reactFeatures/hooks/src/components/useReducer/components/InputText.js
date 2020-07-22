import React, {useState} from "react";

export default function InputText({cssStyle, defaultValue, inputClass, placeHolder, editToDo}) {

    const [value, setValue] = useState(defaultValue);
    const [disable, setDisable] = useState(false);

    const handleEnterButton = (e) => {
            editToDo(e.target.value, defaultValue);
            setDisable(true);
    };

    const border = {
        border: "none",
        //background: "#e9ecef"

    };
    const mergedStyle = {...cssStyle, ...border}

    return(
        <div className={inputClass}>
            <input key= {defaultValue}
                   name="name"
                   id={defaultValue}
                   value={value}
                   placeholder={placeHolder}
                   disabled={disable}
                   style = {mergedStyle}

                  // onKeyUp={handleEnterButton}
                   onChange={e =>  setValue(e.target.value) }
                   onKeyUp={event => event.key === "Enter" ?  handleEnterButton(event) : null}
                   /*onMouseOver={handleClick}
                   onMouseLeave={handleClick}*/
                   /*onFocus={() => console.log("onFocus")}
                   onBlur={() => console.log("onBlur")}*/
                   />
        </div>
    );

}
