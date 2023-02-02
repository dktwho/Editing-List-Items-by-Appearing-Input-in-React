import { useState } from 'react';
import './App.css';
import { initNotes } from './data';

function App() {

  const [notes, setNotes] = useState(initNotes)

  function startEdit(index) {
    setNotes([...notes], notes[index].isEdit = true)
  }

  function changeNote(index, event) {
    setNotes([...notes], notes[index].text = event.target.value)
  }

  function endEdit(index) {
    setNotes([...notes], notes[index].isEdit = false)
  }

  const result = notes.map((note, index) => {
    let elem;
    if(!note.isEdit) {
      elem = <span onClick={() => startEdit(index)}>{note.text}</span>
    } else {
      elem = <input type="text" onChange={(event) => changeNote(index, event)} value={note.text} onBlur={() => endEdit(index)} />
    }
    return <li key={index}>{elem}</li>
  })


  return (
    <div className="App">
      <ul>
        {result}
      </ul>
    </div>
  );
}

export default App;
