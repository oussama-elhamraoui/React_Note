import React from 'react'
import AddNote from '../components/AddNote'
import NotesSection from '../components/NotesSection';

const NotePage = () => {
  // Add note
  const addNote= async(newNote)=>{
    const res= await fetch('http://localhost:8000/notes',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newNote)
    });

    
    return;
}
  return (
    <>
        <AddNote addNoteSubmit={addNote}/>
        <NotesSection isHome={true}/>
    </>
  )
}

export default NotePage
