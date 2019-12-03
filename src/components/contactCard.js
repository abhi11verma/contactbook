import React from "react";
import {Icon} from "antd"

const style = {
    contact_card:{
        width:"300px",
        fontSize:"medium",
        paddingBottom:"5px",
        paddingLeft:"5px",
        marginBottom:"20px",
        marginLeft:"50px",
        boxShadow:"0px 0px 5px #282c34",
        borderRadius:"5px",
    },
    title:{
        fontSize:"13pt",
        textAlign:"left",
        fontWeight:"bold"
    },
    name:{
        fontSize: "16pt",
        color:"#37474f",
        fontWeight:"normal",
        textTransform:"capitalize"
    },
    deletebtn:{
        display: "flex",
        justifyContent:"flex-end",
        marginRight:"5px",
        color:"#c2185b",
    },
}

export default ({name,id, contactNumber, organisation,deleteContact}) => (
    <div style={style.contact_card}>
        <div style={style.title}>Name:<span style={style.name}>{name}</span></div>
        <div style={style.title}>Contact Number:<span>{contactNumber}</span></div>
        <div style={style.title}>Organisation:<span>{organisation}</span></div>
        <div style={style.deletebtn} onClick = {() => deleteContact(id)} >
            <Icon style={style.deleteIcon} type="delete" />
        </div>
    </div>
);
