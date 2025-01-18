import React from 'react'
import Note from './Note'
import notes from '../notes.json'
// import Spinner from './spinner'
import { useState,useEffect } from 'react'

const notesSection = ({isHome=false}) => {
    const [notes,setnotes] = useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchJobs = async ()=>{
          try{
              if(isHome){
                const res = await fetch("http://localhost:8000/notes");
                var data = await res.json();
              }else{
                const res = await fetch("http://localhost:8000/favoriteNotes");
                var data = await res.json();
              }
              setnotes(data);
          }catch(error){
            console.log("Error while fitching",error);
          }finally{
            setLoading(false);
          }
        }
        fetchJobs();
      })
    
      // Delete Note
      const deleteNote = async(noteId)=>{
        const res= await fetch(`http://localhost:8000/notes/${noteId}`,{
          method:'DELETE'
        });
        return;
      }
      // Update Note
      const updateNote=async(note)=>{
        const res= await fetch(`/api/notes/${note.id}`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(note)
        });
        return;
      };
  return (
    <>
        <section className='bg-blue-50'>
            <div className="container-xl lg:container m-auto">
                {/* {loading?<Spinner loading={loading}/>:(
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobs.map((notes)=>(
                        <Note key={notes.id} notes={notes}/>
                    ))}
                    </div>
                )} */}
                <div className=" flex flex-col justify-center p-2 pb-6">
                    {notes.map((notes)=>(
                        <Note key={notes.id} notes={notes} deleteNote={deleteNote} updateNote={updateNote}/>
                    ))}
                    </div>
                </div>
        </section>
    </>
  )
}

export default notesSection
