import React from "react";
import NoteContext from "./NoteContext";

// const NoteState = (props) => {

//     const state = {
//         "name": "saurabh",
//         "class": "b.tech",
//     }
//     return (
//         <NoteContext.provider value={state}>
//             {props.children}
//         </NoteContext.provider>
//     )
// }


// export default NoteState;


const NoteState = ({ children }) => {
    // Your context provider logic here
    return (
      <NoteContext>
        {children}
      </NoteContext>
    );
  };
  
  export default NoteState;