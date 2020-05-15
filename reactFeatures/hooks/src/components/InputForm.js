import React, {useEffect, useState} from "react";

/*
We actually dont need this temps constant.
* */

export default function InputForm() {

    // we extracted saving the changed value. You can use either the way we used for city/postcode or name/surname.
    const city = useFormInput('');
    const postcode = useFormInput('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [temps, setTemps] = useState({
        name: '',
        surname: '',
    });

    const width = useWindowWidth();
    useChangeTitle(name + ' ' + surname);

    const handleChange = (e) => {
        setTemps({...temps, [e.target.name]: [e.target.value]});
        console.log(name);
    }

    const  handleSubmitClick = e => {
        e.preventDefault();
        setName(temps.name);
        setSurname(temps.surname);
    }

    useEffect(() => {
        console.log(name + ' ' + surname);
        console.log("city : " + city.value);
        console.log("postcode: " + postcode.value);
    })

    return (
        <form className="ml-5 mt-3">
            <div className="form-group">
                <input type="text" defaultValue={name} className="form-control" placeholder="Enter name" name="name" key="name"
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <input type="text" defaultValue={surname } className="form-control" placeholder="Enter surname" name="surname" key="surname"
                onChange={handleChange}/>
            </div>

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter city" name="city" key="city"
                       {...city} />
            </div>

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter postcode" name="postcode" key="postcode"
                       {...postcode} />
            </div>

            <div className="form-group form-check float-left">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox"/> Remember me
                </label>
            </div>

            <div>
                <h3>{width}</h3>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Submit</button>
        </form>

            )
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

function useChangeTitle(title) {
    useEffect(() => {
        document.title = title;
    })
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return{
        value,
        onChange: handleChange
    };
}
