import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


export default function Note(props) {
    return (
        <div className="note">
            <p>{props.title}</p>
            <p>{props.content}</p>
            <button onClick={props.onDelete}><DeleteIcon /> {props.id}</button>
        </div>
    );
}
