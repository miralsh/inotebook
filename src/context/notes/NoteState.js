import NoteContext from "./noteContext";

import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialnotes = [];

  const [notes, setNotes] = useState(initialnotes);

  //Get All Notes
  const getAllNotes = async () => {
    //TODO: APi call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxYTdhNjJhNDg4MjE0ZTZhYjMzZDkzIn0sImlhdCI6MTcxMzAxNDg2NX0.JgZGTMdbBPIonHejXTmDuQ6sU_WrZtqtKvdvB-6gxSs",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //Add a Note
  const addNote = async (title, description, tag) => {
    // APi call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxYTdhNjJhNDg4MjE0ZTZhYjMzZDkzIn0sImlhdCI6MTcxMzAxNDg2NX0.JgZGTMdbBPIonHejXTmDuQ6sU_WrZtqtKvdvB-6gxSs",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = async (id) => {
    //APi call
    // APi call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxYTdhNjJhNDg4MjE0ZTZhYjMzZDkzIn0sImlhdCI6MTcxMzAxNDg2NX0.JgZGTMdbBPIonHejXTmDuQ6sU_WrZtqtKvdvB-6gxSs",
      },
    });
    const json = await response.json();
    console.log(json);
    //setNotes(json);
    console.log(`deleting the note with id ${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // APi call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxYTdhNjJhNDg4MjE0ZTZhYjMzZDkzIn0sImlhdCI6MTcxMzAxNDg2NX0.JgZGTMdbBPIonHejXTmDuQ6sU_WrZtqtKvdvB-6gxSs",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
