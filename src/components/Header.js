import React from "react"

export default function Header(){
    return(
        <div className="header">
           <img src={process.env.PUBLIC_URL+"images/globe.png"} className="header--logo" /> 
           <h1 className="header--title">my travel journal</h1>
        </div>
    )
}