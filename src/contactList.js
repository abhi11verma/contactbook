import React, {Component} from "react";
import ContactListItem from "./components/contactListItem";

class ContactList extends Component{

    contacts = [
        {
            contactUID:1,
            contact_name: "Peter",
            contact_number: 837437923,
            contact_organisation: "Samanvay"
        },
        {
            contactUID:2,
            contact_name: "Tom",
            contact_number: 364732373,
            contact_organisation: "Google"

        }

    ];

    state = {
        contacts: this.contacts
    };

    addContactTemp = () =>{

       let newState = this.state.contacts;
       newState.push({
           contactUID:Math.random(),
           contact_name: "NewName",
           contact_number: 99999999,
           contact_organisation: "NewOrg"
        });

        this.setState(
            newState
        )
    }

    render(){
        return(
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Organisation</th>
                </tr>
                </thead>
                <tbody>

                {this.state.contacts.map((contact) => <ContactListItem name={contact.contact_name}
                                                                       contactNumber={contact.contact_number}
                                                                       organisation={contact.contact_organisation}/>)}
                </tbody>
                <button onClick={this.addContactTemp}>Add Contact</button>
            </table>
        );
    }
}

export default ContactList
