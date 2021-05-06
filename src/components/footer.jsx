import React from "react";
import "./style.css";

export default function footer(){
    var year = new Date().getFullYear();
    return(
        <p className="footer">&copy; Copyrights {year}</p>
    );
}