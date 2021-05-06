import React from "react";
import "./style.css";

export default function(props){
    return(
        <div className="card">
            <img src={props.img} alt="card image" />
            <h2>{props.name}</h2>
            <p className="email">{props.email}</p>
        </div>
    );
}