import React, {useContext} from 'react'
import {ToDoContext} from "../ToDoAppWithUseReducer";
import TASK_STATUS from "./TaskStatus";
import InputText from "./InputText";
import TagComponent from "./TagComponent";

export default function Todo({toDo}) {

    const {editToDo, deleteToDo, startToTodo, doneToDo, cancelToDo, resetToDo, addTag, removeTag} = useContext(ToDoContext);

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

    const addTagToItem = (tag) => {
       {addTag(tag, toDo.name)}
    }

    const removeTagFromItem = (tag) => {
        {removeTag(tag, toDo.name)}
    }


    return (<tr>
        <td ><InputText
            defaultValue={toDo.name}
            editToDo={editToDo}
            inputClass=""
            placeHolder=""
            cssStyle ={cssStyle()}
        /></td>
        <td>{toDo.status}</td>
        <td>
            <TagComponent tags={toDo.tags} removeTag={removeTagFromItem} addTag={addTagToItem}/>
        </td>
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
