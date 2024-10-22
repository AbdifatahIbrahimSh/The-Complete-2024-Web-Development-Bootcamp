import { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  const [date, setDate] = useState(time);
  
  setInterval(() => {
    const now = new Date().toLocaleTimeString();
    setDate(now)
  }, 1000);
  return <h1>{date}</h1>;
}

export default App;
