import React, {createContext, useReducer} from "react";
import TodoList from "./components/TodoList";
import TASK_STATUS from "./components/TaskStatus";
import AddTodo from "./components/AddTodo";
import TASK_OPERATIONS from "./components/TaskOperations";

export default function ToDoAppWithUseReducer() {

    const initialState = {
        todos: [
            {
                name: "test",
                status: TASK_STATUS.TODO,
                tags: []
            }
        ]
    }

    const deleteToDo = (name) => {
        dispatchChangeStatus({type: TASK_OPERATIONS.DELETE, name:name});
    }

    const addToDo = (name) => {
        dispatchChangeStatus({type: TASK_OPERATIONS.ADD, name: name});
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


    const [state, dispatchChangeStatus] = useReducer(reducer, initialState, undefined);

    function reducer(state, action) {
        switch (action.type) {
            case TASK_OPERATIONS.ADD:
                const newTodos = [...state.todos, {
                name: action.name,
                    status: TASK_STATUS.TODO,
                    tags: []
            }];

                return {...state, todos: newTodos};

            case TASK_OPERATIONS.DELETE:
                const deletedToDos = state.todos.filter(t => t.name !== action.name)
                return {...state, todos: deletedToDos};

            case TASK_OPERATIONS.UPDATE:
                console.log("updating in reducer");
                break;

            default:
                const updated = state.todos.map(item => item.name === action.name
                    ? {...item, status: action.type} : item);

                return {...state, todos: updated};
        }
    }



    return (
        <div className="container">
            <ToDoContext.Provider value={{addToDo}}>
                <AddTodo addToDo={addToDo}/>
            </ToDoContext.Provider>

            <div className="row-cols-md-6">
                <ToDoContext.Provider
                    value={{todos: state.todos, deleteToDo, startToTodo, doneToDo, cancelToDo, resetToDo}}>
                    <TodoList/>
                </ToDoContext.Provider>
            </div>
        </div>
    );

}


export const ToDoContext = createContext({});
