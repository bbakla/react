import React, {useReducer} from "react";
import Counter from "./Counter";
import ToDoAppWithUseReducer from "./ToDoApp/ToDoAppWithUseReducer";


export default function UserReducer() {

    const explanation = () => {
        return (
            <div>
                <p>UseReducer gives more control over the state compared to useState <br/>
                    It takes a reducer function and initial state as argument and returns the state and dispatch <br/>
                    method.
                    When to prefer useReduer</p>
                <ul>
                    <li>next state depends on the previous</li>
                    <li>state object is complex such as nested object or arrays</li>
                </ul>

                <p style={{fontStyle: "italic"}}>This counter example is for example too simple to use useReducer. <br/>
                    But it tells the basics. To do Application is a better use for useReducers
                </p>

                <p>---------------------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------------</p>
            </div>

        );
    }

    return (
        <div className="ml-4">

            {explanation()}

            <div className="col-md-6">
                <Counter/>
            </div>




        </div>
    );

}
