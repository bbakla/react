import React, {useContext} from "react";
import {ToDoContext} from "../ToDoAppWithUseReducer";

export default function ButtonGroup({todoName}) {

    const {deleteToDo, startToTodo, doneToDo, cancelToDo, resetToDo} = useContext(ToDoContext);

    return (
        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button className="button btn-outline-dark" onClick={() => startToTodo(todoName)}>Start</button>
            <button className="button btn-outline-dark" onClick={() => doneToDo(todoName)}>Done</button>
            <button className="button btn-outline-dark" onClick={() => cancelToDo(todoName)}>Cancel</button>
            <button className="button btn-outline-dark" onClick={() => resetToDo(todoName)}>Reset</button>
            <button className="button btn-outline-dark" onClick={() => deleteToDo(todoName)}>Delete</button>
        </div>
    );
}
