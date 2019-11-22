import React, {Component} from "react";

class ContactList extends Component{

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
                <tr>
                    <td>Charlie</td>
                    <td>82372468923</td>
                    <td>Samanvay</td>
                </tr>
                <tr>
                    <td>Brad</td>
                    <td>8987653567</td>
                    <td>FaceBook</td>
                </tr>
                <tr>
                    <td>Tom</td>
                    <td>63532987828</td>
                    <td>Google</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default ContactList
