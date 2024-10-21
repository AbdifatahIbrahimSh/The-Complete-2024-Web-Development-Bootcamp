import React from "react";


export default function Card(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.image} alt="" />
            <div className="contact">
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}