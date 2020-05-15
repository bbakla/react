import React, {useEffect, useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    const [count3, setCount3] = useState( customHook(100));

    //console.log("logging");

    function customHook(number) {
        return number * 2;
    }

    useEffect(() => {
        const counts =  `count=${count}\t count2=${count2}`;
        document.title = counts;
        console.log(counts);
    });

    return (

                <div className="btn-group">
                <button className="btn btn-dark" onClick={() => setCount(count +1)}>{count}</button>
                <button className="btn btn-outline-dark" onClick={() => setCount2(count2 + 1)}>{count2}</button>
                <button className="btn btn-outline-dark" onClick={() => setCount3(count3 + 5)}>{count3}</button>
                </div>

    );
}
