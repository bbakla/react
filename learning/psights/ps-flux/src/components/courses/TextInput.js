import React from "react";

export default function TextInput(props) {
    return(
        <div className="form-group">
            <label htmlFor={props.inputName}>{props.labelText}</label>
            <div className="field">
                <input id={props.inputName}
                       name={props.inputName}
                       type="text"
                       className="form-control"
                       onChange={props.onFieldChange}
                       value={props.inputValue}/>
            </div>
            {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    );

}
