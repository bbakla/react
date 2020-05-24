import React from "react";
//REDUCER
 const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload.incrementBy;
        case "DECREMENT":
            return state -1;
        default:
            return state;

    }
}

export default counterReducer;
