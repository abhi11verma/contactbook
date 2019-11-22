import React from 'react';
import "./styles/contactForm.css"

export default function contactForm(){
    return(
        <form className="form-container">
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Phone Number:
                <input type="number" name="contactNumber" />
            </label>
            <label>
                Company:
                <input type="text" name="company" />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
};
