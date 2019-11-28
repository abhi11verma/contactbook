import React, {Component, Fragment} from "react";
import ContactListItem from "./components/contactListItem";
import {connect} from 'react-redux'


const style = {
    button:{
        width:100,
        padding:10
    }
}


class ContactList extends Component{

    render(props){
        {console.log("this.props.contacts",this.props.contacts)}

        return(
            <Fragment>
                <button style={style.button} onClick={this.props.addContact}>Add Contact</button>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Organisation</th>
                </tr>
                </thead>
                <tbody>
                {this.props.contacts.map((contact) => <ContactListItem key = {contact.contactUID}
                                                                        name={contact.contact_name}
                                                                       contactNumber={contact.contact_number}
                                                                       organisation={contact.contact_organisation}/>)}
                </tbody>
            </table>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("Dispatching");
    return{
        addContact : () => dispatch({type:"ADD_CONTACT"})
    }
};


const mapStateToProps = (state) => {
    console.log("StateToProps",state);
return{
    contacts : state.contacts
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ContactList);
