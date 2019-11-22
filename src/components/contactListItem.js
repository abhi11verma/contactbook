import React from "react";

function contactListItem(props) {
    return(
            <tr>
                <td>{props.name}</td>
                <td>{props.contactNumber}</td>
                <td>{props.organisation}</td>
            </tr>

    )

}


export default contactListItem;
