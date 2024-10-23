import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFullName((prev) => {
      if (name === "fName") {
        return {
          ...prev, 
          [name]: value
        }
      }
      if (name === "lName") {
        return {
          ...prev, 
          [name]: value
        }
      }
      
    })
  }

  return (
    <div>
      <h2>Hello {fullName.fName} {fullName.lName}</h2>
      <input onChange={(event) => handleChange(event)} value={fullName.fName} type="text" placeholder="Firstname" name="fName"/>
      <input onChange={(event) => handleChange(event)} value={fullName.lName} type="text" placeholder="Lastname" name="lName"/>
      <input type="submit" />
    </div>
    
  );
}

export default App;
