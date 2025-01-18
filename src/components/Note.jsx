import React from 'react'
import { FaTrash,FaStar } from 'react-icons/fa6'
import { useState } from 'react';

const Note = ({notes,deleteNote,updateNote,isHome}) => {
  const [favorite,setFavorite]=useState(false);
  const [note,setNote]=useState(notes.note);
  const [id,setId]=useState(notes.id);
  const onDeleteClick=(noteId)=>{
    const confirm=window.confirm("Delete Note!!!");
    if(!confirm)return;
    deleteFavorite(noteId);
    deleteNote(noteId);
  }
  //Add to favorite
  const addToFavorite=async(favoriteNote)=>{
    const res= await fetch('http://localhost:8000/favoriteNotes',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(favoriteNote)
    });
    return;
  }
  //Delete from favorite
  const deleteFavorite = async(noteId)=>{
    const res= await fetch(`http://localhost:8000/favoriteNotes/${noteId}`,{
      method:'DELETE'
    });
    return;
  }
  const onFavoriteClick = (favorite)=>{
    favorite=favorite?false:true;
    const favoriteNote ={
      id,
      note,
      favorite,
    }
    if(favorite){
      addToFavorite(favoriteNote);
    }else{
      deleteFavorite(id);
    }
    console.log(favoriteNote);
    updateNote(favoriteNote);
  }
  return (
    <>
        <div className="bg-white p-6 mt-4 rounded-md ">
            <p className="float-left">{notes.note}</p>
            <div className='flex justify-center gap-2 float-right'>

              <button onClick={()=>onFavoriteClick(notes.favorite)} className={notes.favorite?'pr-2 text-xl flex justify-center items-center float-right bg-amber-400 p-2 rounded-md text-white hover:bg-amber-500':'pr-2 text-xl flex justify-center items-center float-right border-2 border-amber-400 p-2 rounded-md text-amber-400 hover:text-amber-500 hover:border-amber-500'}>
                <FaStar/>
              </button>
              <button onClick={()=>onDeleteClick(notes.id)} className=' flex justify-center items-center float-right bg-red-400 p-2 rounded-md text-white hover:bg-red-500'>
                <FaTrash className='pr-2 text-2xl'/>
                Delete
              </button>
            </div>

        </div>
    </>
  )

}

export  default Note
