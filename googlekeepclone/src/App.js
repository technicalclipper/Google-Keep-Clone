import logo from './logo.svg';
import './App.css';
import Header from "./header"
import Input from "./input"
import Note from "./note"
import { useEffect, useState } from 'react';


function App() {
  const [input,setinput]=useState({heading:"",desc:"",key:"1"});
  const [global,setglobal]=useState([]);

  function handle_on_change(e){
    const name=e.target.name;
    const value=e.target.value;
    setinput((prev)=>{return({...prev,[name]:value})});
  }
  


  function handle_add_onclick(){
    setglobal((prev)=>{return ([...prev,input])});
  }
  return (
    <div style={{minHeight: '100vh' }}>
      <Header/>
      <Input className="centerinput" onChange={handle_on_change} state={input} />
      <div className="notecontainer">
        <Note value={input}/>
        <Note value={input}/>
        <Note value={input}/>
        <Note value={input}/>
        <Note value={input}/>
        <Note value={input}/>
      </div>
    </div>
  );
}

export default App;
