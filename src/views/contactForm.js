import React, {Component} from 'react';
import "../styles/contactForm.css"
import {connect } from 'react-redux'
import {addContact} from '../actions/actionCreator';

class contactForm extends Component{
     submitContact = (event) =>{
        event.preventDefault();

        const name = event.target.name.value;
        const contactNumber = event.target.contactNumber.value;
        const company = event.target.company.value;

        const contactData = {
            contact_name: name,
            contact_number: contactNumber,
            contact_organisation: company
        }
        return this.props.submitNewContact(contactData);
    }


    render(){
        return(
            <form className="form-container" onSubmit={this.submitContact}>
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
                <input className="button" type="submit" value="Submit"/>
            </form>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return({
        submitNewContact: (data) => dispatch(addContact(data))
    })
}


export default connect(null,mapDispatchToProps)(contactForm);
