import './App.css';
import Header from "./header";
import Input from "./input";
import Note from "./note";
import { useState, useRef } from 'react';

function App() {
  const [input, setInput] = useState({ heading: "", desc: "", key: 1 });
  const [global, setGlobal] = useState([]);
  
  const keyRef = useRef(1); 

  function handle_on_change(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  }

  function handle_add_onclick() {
    setGlobal((prev) => [...prev, input]);
    keyRef.current += 1; 
    setInput({ heading: "", desc: "", key: keyRef.current }); 
  }

  function delete_note(index) {
    setGlobal((prev) => prev.filter((note) => note.key !== index));
  }
  

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <Input
        className="centerinput"
        onChange={handle_on_change}
        onClick={handle_add_onclick}
        state={input}
        global={global}
      />
      <div className="notecontainer">
        {global.map((note, index) => (
          <Note key={note.key} value={note} delete={delete_note} />
        ))}
      </div>
    </div>
  );
}

export default App;
