import React from "react";


export default function Note(props) {
    return (
        <div className="note">
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
    );
}
