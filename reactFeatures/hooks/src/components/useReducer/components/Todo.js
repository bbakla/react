import React, {useContext} from 'react'
import {ToDoContext} from "../ToDoAppWithUseReducer";
import TASK_STATUS from "./TaskStatus";

export default function Todo({toDo}) {

    const {deleteToDo, startToTodo, doneToDo, cancelToDo, resetToDo} = useContext(ToDoContext);

    const cssStyle = () => {

        switch (toDo.status) {
            case TASK_STATUS.TODO:
                return {color: 'orange'};


            case TASK_STATUS.IN_PROGRESS:
                return {color: "green"};


            case TASK_STATUS.CANCELED:
                return {color: "red"};


            case TASK_STATUS.COMPLETED:
                return  {color: "blue"};

            default:
                return {};

        }
    }

    const editItem = () => {

    }


    return (<tr>
        <td style={cssStyle()}>{toDo.name}</td>
        <td>{toDo.status}</td>
        <td>{toDo.tags}</td>
        <td>
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button className="button btn-outline-dark" onClick={() => startToTodo(toDo.name)}>Start</button>
                <button className="button btn-outline-dark" onClick={() => doneToDo(toDo.name)}>Done</button>
                <button className="button btn-outline-dark" onClick={() => cancelToDo(toDo.name)}>Cancel</button>
                <button className="button btn-outline-dark" onClick={() => resetToDo(toDo.name)}>Reset</button>
                <button className="button btn-outline-dark" onClick={() => deleteToDo(toDo.name)}>Delete</button>
                <button className="button btn-outline-dark" onClick={() => deleteToDo(toDo.name)}>Edit</button>
            </div>
        </td>
    </tr>);
}
