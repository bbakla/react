import React, {useEffect, useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    const [count3, setCount3] = useState(customHook(100));

    function customHook(number) {
        return number * 2;
    }

    useEffect(() => {
        const counts = `count=${count}\t count2=${count2}`;
        document.title = counts;
    });

    const countsInArray = () =>  {
        const counts = []
        counts[0] = [count, setCount]
        counts[1] = [count2, setCount2]
        counts[2] = [count3, setCount3]

        return (counts.map((c, index) =>
            <div key ={index} className="grid">
                <div  className="row">
                    <div className="btn-group">
                        <button className="btn btn-outline-dark" onClick={() => c[1](c[0] + 1)}>
                            <span className="fa fa-plus"></span></button>

                        <button className="btn btn-outline-dark" onClick={() => c[1](c[0] - 1)}>
                            <span className="fa fa-minus"></span></button>

                        <button className="btn btn-outline-dark" onClick={() => c[1](0)}>
                            Reset
                        </button>
                    </div>
                </div>
                <div className="row">
                    <h4>Count 2 is {c[0]}</h4>
                </div>
            </div>
        ));
    }

    return (

        <div className="container mt-4 mb-6">

            {countsInArray()}

        </div>

    );
}
