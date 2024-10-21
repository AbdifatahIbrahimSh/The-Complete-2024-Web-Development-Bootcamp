import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Note from './components/Note.jsx'
import "./index.css";
import notes from "./notes.js"

export default function App() {
  return (
    <>
     <Header />
     <div className="container">
      {notes.map(note => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
     </div>
     <Footer />
    </>
      
  );
}


