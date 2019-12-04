import React, {Component, Fragment} from "react";
import ContactListItem from "./components/contactCard";
import {connect} from 'react-redux'
import * as actionCreator from "./actions/actionCreator";


const style = {
    button: {
        width: 100,
        padding: 10
    }
};

class ContactList extends Component {

    componentDidMount() {
        this.props.getAllContacts()
    }

    render() {
        return (
            <Fragment>
                {this.props.isLoading ? "Loading...." : this.props.processingCard ? "Processing" :

                    this.props.contacts.map((contact) => <ContactListItem key={contact.contactUID}
                                                                        id = {contact.contactUID}
                                                                          name={contact.contact_name}
                                                                          contactNumber={contact.contact_number}
                                                                          organisation={contact.contact_organisation}
                                                                          deleteContact={this.props.deleteContactWithId}
                    />)}
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllContacts: () => dispatch(actionCreator.fetchContactList()),
        deleteContactWithId: (id)=> dispatch(actionCreator.deleteContact(id))
    }
};


const mapStateToProps = (state) => {
    return {
        contacts: state.contactList.contacts,
        isLoading: state.contactList.loadingContactList,
        processingCard: state.contactList.processingCard
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
