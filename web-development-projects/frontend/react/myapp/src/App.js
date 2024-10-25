import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Note from './components/Note.jsx'
import "./index.css";
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function App() {
  const [list, setList] = useState([]);
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  })
  const [isExpanded, setExpanded] = useState(false);

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

  function expand() {
    setExpanded(true);
  }

  return (
    <>
     <Header />
     <div> 
      <div className="big-container"> 
        <div className="note-creater">
            {isExpanded ? 
            <input autoFocus={isExpanded ? true : false} value={notes.title} onChange={(event) => handleChange(event)} name="title" type="text" placeholder="Title" /> : null}
            <textarea onClick={expand} rows={isExpanded ? 3 : 1} value={notes.content} onChange={(event) => handleChange(event)} name="content" placeholder="Take a note..."></textarea>
            <Zoom in={isExpanded} >
              <Fab size="small" onClick={handleClick}><AddIcon /></Fab>
            </Zoom>
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


