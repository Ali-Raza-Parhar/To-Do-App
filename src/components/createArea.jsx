import React, {useState} from "react";
import "./style.css";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

export default function CreateNote(props){
    const [isExpanded, setExpanded] = useState(false);
    const [notes, setNotes] = useState({
            title: "",
            desc: ""
        });
    function handleChange(event){
        const {name, value} = event.target;
        setNotes(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }
    function addNote(event){
        if(notes.title !== "" && notes.desc !==""){
          props.addNote(notes);
        }
        else{
          alert("Please add a note and its description first!");
        }
          setNotes({
            title: "",
            desc: ""
        });
        event.preventDefault();
    }
    function expand(){
      setExpanded(true);
    }
    return(
        <div className="addNote">
          <form>
            {isExpanded &&
              <input onChange={handleChange} className="addNoteInput" 
                value={notes.title} type="text" name="title" placeholder="Title"
              />
            }

            <textarea 
              onClick={expand}
              onChange={handleChange} className="addNoteDesc" 
              value={notes.desc} name="desc" 
              rows={isExpanded ? "3" : "1"} 
              placeholder="Take a note..."
              > 
            </textarea><br />
            <Zoom in={isExpanded ? true: false} 
              className="addNoteSubmitBtn">
              <button onClick={addNote}>
                <AddIcon />
              </button>
            </Zoom>
          </form>
        </div>
    );
}