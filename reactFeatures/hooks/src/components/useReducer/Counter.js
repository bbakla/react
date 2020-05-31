import React, {useReducer} from "react";

export default function Counter() {

    function reducerIncrement(state, action) {
        switch (action.type) {
            case "ADD":
                return {...state, count: state.count + action.by};
            case "SUB" :
                return {...state, count: state.count - action.by};
            default:
                return {...state, count: 0};
        }
    }

    function reducerIncrement2(state, action) {
        switch (action.type) {
            case "ADD":
                return state + 1;
            case "SUB" :
                return state - 1;
            default:
                return 0;
        }
    }

    function init(initCount) {
        return {count: initCount};
    }

    const [state, dispatch] = useReducer(reducerIncrement, {count: 0}); // wraps count object into state.
    const [state2, dispatch2] = useReducer(reducerIncrement, 0, init); // wraps count object into state.
    const [count, dispatch3] = useReducer(reducerIncrement2, 0); //uses count object directly. no wrapping.

    return (
        <div className="ml-4">
            <div key="useReducer" className="grid mb-5">
                <div className="row">
                    <div className="btn-group">
                        <button className="btn btn-outline-dark" onClick={() => dispatch({type: "ADD", by:2}
                        )}>
                            <span className="fa fa-plus"></span></button>

                        <button className="btn btn-outline-dark" onClick={() => dispatch({type: "SUB", by:2})}>
                            <span className="fa fa-minus"></span></button>

                        <button className="btn btn-outline-dark" onClick={() => dispatch({type: "RESET"})}>
                            Reset
                        </button>
                    </div>
                    <div className="row ml-5">
                        <h4>Count is {state.count}</h4>
                    </div>
                </div>
            </div>

            <div key="useReducer2" className="grid mb-5">
                <h3>Count is initialized with init functoion. Lazy loading</h3>
                <div className="row">
                    <div className="btn-group">
                        <button className="btn btn-outline-dark" onClick={() => dispatch2({type: "ADD", by:5}
                        )}>
                            <span className="fa fa-plus"></span></button>

                        <button className="btn btn-outline-dark" onClick={() => dispatch2({type: "SUB", by:5})}>
                            <span className="fa fa-minus"></span></button>

                        <button className="btn btn-outline-dark" onClick={() => dispatch2({type: "RESET"})}>                                Reset
                        </button>
                    </div>

                    <div className="row ml-5">
                        <h4>Count is {state2.count}</h4>
                    </div>
                </div>
            </div>



                <div key="useReducer3" className="grid">
                    <h3>No wrapper around count</h3>
                    <div className="row">
                        <div className="btn-group">
                            <button className="btn btn-outline-dark" onClick={() => dispatch3({type: "ADD"}
                            )}>
                                <span className="fa fa-plus"></span></button>

                            <button className="btn btn-outline-dark" onClick={() => dispatch3({type: "SUB"})}>
                                <span className="fa fa-minus"></span></button>

                            <button className="btn btn-outline-dark" onClick={() => dispatch3({type: "RESET"})}>                                Reset
                            </button>
                        </div>

                        <div className="row ml-5">
                            <h4>Count is {count}</h4>
                        </div>
                    </div>

            </div>

        </div>
    );

}
