import React from "react";
import { useState } from "react";

function Form({location, setLocation}){

    const [typedLocation, setTypedLocation] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        setLocation(typedLocation);
        setTypedLocation('')
    }

    return(
        <div className = "form">
            <form onSubmit={handleSubmit}>
                <label className = "city">City:
                    <input 
                    value={typedLocation}
                    type="text"
                    onChange={(e) => setTypedLocation(e.target.value)}
                    />
                </label>
                <button 
                    className = "btn btn-primary" 
                    type="submit"
                >Submit</button>
            </form>
        </div>
    )
}

module.exports = Form;