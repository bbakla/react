import React, {useState} from "react";

export default function ObjectStateVariable() {

    const [contactInfo, setContactInfo] = useState({name: '', surname:''});

    const{name, surname} = contactInfo;

    const handleClick = () => {
        setContactInfo( {...contactInfo, name: generateARandomString(), surname: generateARandomString()});

    }

    return(
        <div className="container mt-8">
            <h2> My name is {name}</h2>
            <h3>My surname is {surname}</h3>

            <button className="button btn-lg" onClick={handleClick}>Change my contact info</button>
        </div>
    );
}

function generateARandomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

