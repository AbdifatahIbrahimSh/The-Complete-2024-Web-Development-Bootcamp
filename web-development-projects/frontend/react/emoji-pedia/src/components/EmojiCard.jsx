import React from "react";

export default function EmojiCard(props) {
    return (
        <div className="emoji-card">
            <span>{props.emoji}</span>
            <h2>{props.name}</h2>
            <p>{props.meaning}</p>
        </div>
    );
}   