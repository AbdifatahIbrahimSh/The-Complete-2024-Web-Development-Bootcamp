import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Note from './components/Note.jsx'
import "./index.css";
import { useState } from 'react';

export default function App() {
  const [list, setList] = useState([]);
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setNotes((prev) => {
      return {
        ...prev, 
        [name]: value
      }
    })
  }

  function handleClick() {
    if (notes.title.trim() !== "" && notes.content.trim() !== "") {
      setList((prev) => {
        return [...prev, notes];
      })
      setNotes({
        title: "",
        content: ""
      })
    } else {
      alert("Please provide a title and a content.");
    }
  }

  function handleDelete(indexToDelete) {
   setList(prev => {
    return prev.filter((note, index) => index !== indexToDelete);
   })
  }

  return (
    <>
     <Header />
     <div> 
      <div className="big-container"> 
        <div className="note-creater">
            <input value={notes.title} onChange={(event) => handleChange(event)} name="title" type="text" placeholder="This is the note title" />
            <textarea value={notes.content} onChange={(event) => handleChange(event)} name="content" placeholder="This is the note content"></textarea>
            <button onClick={handleClick}>Add</button>
        </div>
      <div className="container">
        {list.map((note, index) => (
          <Note title={note.title} content={note.content} onDelete={() => handleDelete(index)} />
        ))}
      </div>
      </div>
     </div>
     
     <Footer />
    </>
      
  );
}


