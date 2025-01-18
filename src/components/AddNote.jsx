import React from 'react'
import { useState } from 'react';

const HomePage = ({addNoteSubmit}) => {
  const [note,setNote]=useState('');
  const submitForm = (e)=>{
    e.preventDefault();
    const newNote ={
      note,
    }
    console.log(newNote);
    addNoteSubmit(newNote);
  }
  return (
    <>
        <div className='bg-indigo-500 flex w-[100vw] h-[40vh] justify-center items-center m-auto flex-col' >
          <h1 className=" text-center text-white text-5xl font-bold">Add Note: </h1>
          <form onSubmit={submitForm}>
            <div className='flex items-stretch justify-start'>
              <textarea type="text" className='mt-5 text-2xl rounded-md p-2' value={note} onChange={(e)=>setNote(e.target.value)}/>
              <input type="submit" className='ml-2 mt-5 p-3 h-inherit bg-white rounded-md text-center font-semibold text-indigo' value='Add'/>

            </div>
          </form>
        </div>
    </>
  )
}

export default HomePage
