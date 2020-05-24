// ACTIONS
export const increment = (incrementBy) => {
    return {
        type: "INCREMENT",
        payload: {incrementBy}
    };
}

export const  decrement = () => {
    return {
        type: "DECREMENT"
    };
}
