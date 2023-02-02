import React from 'react'
import { useState } from 'react'
import { initNotes2 } from './data'

const App2 = () => {

  const [notes, setNotes] = useState(initNotes2)

  function startEdit(index) {
    setNotes([...notes], notes[index].isEdit = true)
  }

  function changeHandler(index, event) {
    setNotes([...notes], notes[index].text = event.target.value)
  }

  function endEdit(index) {
    setNotes([...notes],notes[index].isEdit = false)
  }


  const result = notes.map((note, index) => {
    let elem;
    if(!note.isEdit) {
      elem = <><span>{note.text}</span> <button onClick={() => startEdit(index)}>edit</button></>
    } else {
      elem = <><input type="text" value={note.text} onChange={(event) => changeHandler(index, event)} /><button onClick={() => endEdit(index)}>save</button></>
    }
    return <li key={index}> {elem}</li>
  })


  return (
    <div className='App'>
      <ul>{result}</ul>
    </div>
  )
}

export default App2
