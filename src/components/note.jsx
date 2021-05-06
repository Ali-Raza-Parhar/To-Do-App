import React from "react";
import "./style.css";
import DeleteIcon from '@material-ui/icons/Delete';

export default function notes(props){
    function delNote(){
        props.onDelete(props.id);
    }

    return(
        <div className="showNotes">
            <p className="note"><b>{props.title}</b><br />{props.content}</p>
            <button className="deleteBtn" onClick={delNote}>
                <DeleteIcon />
            </button>
        </div>
    );
}