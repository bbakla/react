import React, {useContext} from 'react'
import {ToDoContext} from "../ToDoAppWithUseReducer";
import TASK_STATUS from "./TaskStatus";
import InputText from "../../components/InputText";
import TagComponent from "./TagComponent";
import ButtonGroup from "./ButtonGroup";

export default function Todo({toDo}) {

    const {editToDo, addTag, removeTag} = useContext(ToDoContext);

    const cssStyle = () => {

        switch (toDo.status) {
            case TASK_STATUS.TODO:
                return {color: 'orange'};

            case TASK_STATUS.IN_PROGRESS:
                return {color: "green"};

            case TASK_STATUS.CANCELED:
                return {color: "red"};

            case TASK_STATUS.COMPLETED:
                return {color: "blue"};

            default:
                return {};

        }
    }

    const addTagToItem = (tag) => {
        {
            addTag(tag, toDo.name)
        }
    }

    const removeTagFromItem = (tag) => {
        {
            removeTag(tag, toDo.name)
        }
    }

    return (<tr>
        <td>
            <InputText key={toDo.name}

                       defaultValue={toDo.name}
                       editToDo={editToDo}
                       inputClass=""
                       placeHolder=""
                       cssStyle={cssStyle()}
            /></td>
        <td>{toDo.status}</td>
        <td>
            <TagComponent tags={toDo.tags} removeTag={removeTagFromItem} addTag={addTagToItem}/>
        </td>
        <td>
            <ButtonGroup todoName={toDo.name}/>
        </td>
    </tr>);
}
