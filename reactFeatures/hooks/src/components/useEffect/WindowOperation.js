import React, {useEffect, useState} from "react";

export default function WindowOperation() {
//move useEffect into a different function
    const width = useWindowWidth();
    useChangeTitle(width);

    
    useEffect(() => {
        window.addEventListener('click', () => console.log("clicked on the window"));

        return(() => {
            window.removeEventListener('click', ()=> console.log("removing logging the click event"));
        })
    }, []);

    return(
        <div className="card mt-4">
            <div>
                <h3>{width}</h3>
            </div>
        </div>
    );
}



/*There are two ways to name this function

 1. If we want to create it as custom hook, the name should start with "use".
 2. It should start with a capital letter.
 */
function useWindowWidth() {
    const[width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return width;
}

function useChangeTitle(width) {
    useEffect(() => {
        document.title = width;
    })
}
