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

    //initialize state from Function
    const [randomString] = useState(() => {
        let token = generateRandomString();

        return token;
    })



    const handleChange = (e) => {
        //setTemps({...temps, name: "something"});// that would set surname to an empty string
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
<div className="container">
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

            <button type="submit" className="btn btn-block  btn-primary " onClick={handleSubmitClick}>Submit</button>
        </form>

    <div className="card mt-4">
        <div className="card-header">
            <h3>Initialize state from Function. </h3>
        </div>

        <div >
            <h5>Generates a random string</h5>
            <p>{randomString}</p>
        </div>

    </div>
    </div>
            )
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

function generateRandomString() {
    /*let result           = 5;
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;*/

    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
