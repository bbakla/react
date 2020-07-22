import React, {createContext, useEffect, useReducer} from "react";
import TodoList from "./components/TodoList";
import TASK_STATUS from "./components/TaskStatus";
import AddTodo from "./components/AddTodo";
import TASK_OPERATIONS from "./components/TaskOperations";

export default function ToDoAppWithUseReducer() {

    const initialState = {
        todos: JSON.parse(localStorage.getItem("todos")),
        allTags: JSON.parse(localStorage.getItem("allTags"))
    }

    const deleteToDo = (name) => {
        dispatchChangeStatus({type: TASK_OPERATIONS.DELETE, name: name});
    }

    const addToDo = (name) => {
        dispatchChangeStatus({type: TASK_OPERATIONS.ADD, name: name});
    }

    const editToDo = (name) => {
        dispatchChangeStatus({type: TASK_OPERATIONS.EDIT, name: name});
    }

    const startToTodo = (name) => {
        dispatchChangeStatus({type: TASK_STATUS.IN_PROGRESS, name: name});
    }

    const doneToDo = (name) => {
        dispatchChangeStatus({type: TASK_STATUS.COMPLETED, name: name});
    }

    const cancelToDo = (name) => {
        dispatchChangeStatus({type: TASK_STATUS.CANCELED, name: name});
    }

    const resetToDo = (name) => {
        dispatchChangeStatus({type: TASK_STATUS.TODO, name: name});
    }

    const addTag = (tag, itemName) => {
        dispatchChangeStatus({type: TASK_OPERATIONS.ADD_TAG, name: itemName, tag: tag});
    }

    const removeTag = (tag, itemName) => {
        dispatchChangeStatus({type: TASK_OPERATIONS.REMOVE_TAG, name: itemName, tag: tag});
    }

    const saveNewList = (newTodos) => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    const saveToTagList = (tags) => {
        localStorage.setItem("allTags", JSON.stringify(tags));
    }


    useEffect(() => {
        if (localStorage.getItem("todos") === "" ) {
                localStorage.setItem("todos", JSON.stringify([]));
        }

        if (localStorage.getItem("allTags") === "") {
            localStorage.setItem("allTags", JSON.stringify([]));
        }
    }, []);


    const [state, dispatchChangeStatus] = useReducer(reducer, initialState, undefined);

    function reducer(state, action) {
        switch (action.type) {
            case TASK_OPERATIONS.ADD:
                const newTodos = [...state.todos, {
                    name: action.name,
                    status: TASK_STATUS.TODO,
                    tags: []
                }];

                saveNewList(newTodos);

                return {...state, todos: newTodos};

            case TASK_OPERATIONS.DELETE:
                const deletedTask = state.todos.find(todo => todo.name === action.name);
                const remainingTasks = state.todos.filter(t => t.name !== action.name)

                let remainingTags = [];

                if (remainingTasks.length > 0 ) {
                    let tagsToBeDeleted = []
                    deletedTask.tags.forEach(t => {
                        remainingTasks.forEach(todo => {
                            if (!todo.tags.includes(t)) {
                                tagsToBeDeleted.push(t);
                            }
                        });

                    });

                    let allTags = JSON.parse(localStorage.getItem("allTags"))
                    remainingTags = allTags.filter(tag => !tagsToBeDeleted.includes(tag));
                }
                
                saveNewList(remainingTasks)
                saveToTagList(remainingTags)

                return {...state, allTags: remainingTags, todos: remainingTasks};

            case TASK_OPERATIONS.EDIT:
                const edited = state.todos.map(item => item.name === action.name
                    ? {...item, name: action.name} : item);

                saveNewList(edited);
                return {...state, todos: edited};

            case TASK_OPERATIONS.ADD_TAG:
                const tagAdded = state.todos.map(item => {
                    if (item.name === action.name && item.tags.indexOf(action.tag) === -1) {
                        return {...item, tags: [...item.tags, action.tag]};
                    } else {
                        return item;
                    }
                });

                let addToAllTags = state.allTags

                if (state.allTags.indexOf(action.tag) === -1) {
                    addToAllTags = [...state.allTags, action.tag];
                }

                saveNewList(tagAdded);
                saveToTagList(addToAllTags)

                return {...state, todos: tagAdded, allTags: addToAllTags};

            case TASK_OPERATIONS.REMOVE_TAG:
                const tagRemoved = state.todos.map(item => item.name === action.name
                    ? {...item, tags: item.tags.filter(t => t !== action.tag)} : item);

                const removeFromAllTags = state.allTags.filter(t => t !== action.tag)

                saveNewList(tagRemoved);
                saveToTagList(removeFromAllTags)

                return {...state, todos: tagRemoved, allTags: removeFromAllTags};

            default:
                const updated = state.todos.map(item => item.name === action.name
                    ? {...item, status: action.type} : item);

                saveNewList(updated);

                return {...state, todos: updated};
        }
    }

    return (
        <div className="container">
            <ToDoContext.Provider value={{addToDo}}>
                <AddTodo addToDo={addToDo}/>
            </ToDoContext.Provider>

            <div className="row">
                <ToDoContext.Provider
                    value={{
                        todos: state.todos,
                        allTags: state.allTags,
                        editToDo,
                        deleteToDo,
                        startToTodo,
                        doneToDo,
                        cancelToDo,
                        resetToDo,
                        addTag,
                        removeTag
                    }}>
                    <TodoList/>

                </ToDoContext.Provider>
            </div>
        </div>
    );
}

export const ToDoContext = createContext({});
