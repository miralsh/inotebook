import NoteContext from "./noteContext";

import { useState } from "react";

const NoteState = (props) => {
  const initialnotes = [
    {
      _id: "661b6f27491a8e384235f4ff",
      user: "661a7a62a488214e6ab33d93",
      title: "First Note",
      description: "Description",
      tag: "Tag",
      date: "2024-04-14T05:52:39.451Z",
      __v: 0,
    },
    {
      _id: "661b6f32491a8e384235f503",
      user: "661a7a62a488214e6ab33d93",
      title: "third Note",
      description: "Description",
      tag: "Tag",
      date: "2024-04-14T05:52:50.633Z",
      __v: 0,
    },
    {
      _id: "661b6f39491a8e384235f505",
      user: "661a7a62a488214e6ab33d93",
      title: "fourth Note",
      description: "Description",
      tag: "Tag",
      date: "2024-04-14T05:52:57.089Z",
      __v: 0,
    },
    {
      _id: "661b6f41491a8e384235f509",
      user: "661a7a62a488214e6ab33d93",
      title: "sixth Note",
      description: "Description",
      tag: "Tag",
      date: "2024-04-14T05:53:05.518Z",
      __v: 0,
    },
    {
      _id: "661b6f41491a8e384235f509",
      user: "661a7a62a488214e6ab33d93",
      title: "seventh Note",
      description: "Description",
      tag: "Tag",
      date: "2024-04-14T05:53:05.518Z",
      __v: 0,
    },
    {
      _id: "661b6f41491a8e384235f509",
      user: "661a7a62a488214e6ab33d93",
      title: "eigth Note",
      description: "Description",
      tag: "Tag",
      date: "2024-04-14T05:53:05.518Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialnotes);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
