import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "./actions";


function App() {
    const counter = useSelector(state => state.counterReducer)
    const isLoggedIn = useSelector(state => state.loggedReducer)
    const dispatch = useDispatch();


    return (
        <div>
            <h1>Counter from CounterStore = {counter}</h1>

            <h3> Logged in situation {isLoggedIn}</h3>

            <button className="btn btn-primary" onClick={() => dispatch(increment(1))}>+</button>
            <button className="btn btn-warning" onClick={() => dispatch(decrement())}>-</button>
            <button className="btn btn-warning" onClick={() => dispatch(increment(5))}>+5</button>

        </div>
    );
}

export default App;
