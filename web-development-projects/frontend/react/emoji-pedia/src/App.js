import React from "react";
import EmojiCard from "./components/EmojiCard";
import emojis from "./emojis"

function App() {
  return (
    <>
      <h1 className="heading"> EmojiPedia</h1>
      <div className="container">
        {emojis.map(emoji => (
          <EmojiCard key={emoji.id} name={emoji.name} emoji={emoji.emoji} meaning={emoji.meaning} />
        ))}
      </div>
    </>
  );
}

export default App;
