import { useState } from "react";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const item = e.target.value;
    setInputText(item);
    
  }

  function handleClick() {
    if (inputText.trim().length > 0) {
      setItems((prevItems) => {
        return [...prevItems, inputText];
    })
    setInputText("");
    } else {
      alert("Enter something in the textbox before clicking ssve.")
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h2>Todo List</h2>
      </div>
      <div className="form">
        <input type="text" onChange={(e) => handleChange(e)} value={inputText} />
        <button onClick={handleClick}>Save</button>
      </div>
      <div className="list">
        <ul>
          {items.map(item => <li>{item}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
