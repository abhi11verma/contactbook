import React, {Component, Fragment} from "react";
import ContactListItem from "./components/contactListItem";
import {connect} from 'react-redux'


const style = {
    button:{
        width:100,
        padding:10
    }
};



class ContactList extends Component{

    componentDidMount(){
        this.props.getAllContacts()
    }


    render(props){
        {console.log("ContactList State-Props:",this.props)}
        return(
            <Fragment>
                {this.props.isLoading ? "Loading...." :
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Organisation</th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.props.contacts.map((contact) => <ContactListItem key={contact.contactUID}
                                                                               name={contact.contact_name}
                                                                               contactNumber={contact.contact_number}
                                                                               organisation={contact.contact_organisation}/>)}
                        </tbody>
                    </table>
                }
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getAllContacts: () => dispatch({type:"GET_ALL_CONTACTS"}),
        addContact : () => dispatch({type:"ADD_CONTACT"})
    }
};


const mapStateToProps = (state) => {
return{
    contacts : state.contacts,
    isLoading: state.loadingContactList
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ContactList);
