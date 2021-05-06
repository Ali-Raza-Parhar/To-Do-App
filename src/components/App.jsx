import React, { useState } from "react";
import Header from "./header";
import Notes from "../notes";
import Note from "./note";
import Contacts from "../contacts.js";
import Card from "./card";
import Footer from "./footer";
import CreateArea from "./createArea";

function createCards(contact){
    return(
        <Card 
            key={contact.id}
            name={contact.name} 
            img={contact.img}
            email={contact.email}
        />
    );
}
function Cards(){
    return(
        <div>
            <h1 className="contacts">Contacts</h1>
            {Contacts.map(createCards)}
        </div>
    );
}

export default function App(){
    const [newNote, setNewNote] = useState([]);
    function addNewNote(notesContent){
        setNewNote(prevNote => {
            return [...prevNote, notesContent];
        });
    };
    function deleteNote(id){
        setNewNote(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    };
    return(
        <div>
            <Header />
            <div className="notesContainer">
              <CreateArea addNote={addNewNote}/>
              {newNote.map((note, id) => (
                    <Note
                        key={id}
                        id={id}
                        title={note.title}
                        content={note.desc}
                        onDelete={deleteNote}
                    />
                ) )}
            </div>
            {/* <Cards /> */}
            <Footer />
        </div>
    );
}
