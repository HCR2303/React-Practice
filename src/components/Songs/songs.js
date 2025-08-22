import React, { Component, useState } from "react";
//import axios from "axios"; //Se implementará una API para la generación de información sobre musica agregando la funcionalidad del buscador
import "./styles.css"
import missingImg from "./missing.png"

const Songs=()=>{
    const SONGS=[
        //-------->OJO: las variables fuera del bloque return llevan una sintaxis sin {} 
        {id:"1",imagen:missingImg,songName:"Cancion 1",artist:"Artista",album:"Album",duration:"3:25"},
        {id:"2",imagen:missingImg,songName:"Cancion 2",artist:"Artista",album:"Album",duration:"4:01"},
        {id:"3",imagen:missingImg,songName:"Cancion 3",artist:"Artista",album:"Album",duration:"3:11"}
    ];
    
    return (
        <div className="listFound"> 
        {/*Se utiliza el método map y destructuring de una libreria hacia sus claves */}               
        {SONGS.map(({id,imagen,songName,artist,album,duration})=>(
            /*se realiza una identificación para el elemento li mediante key instead id*/
            <li key={id}>                    
                <img src={imagen} alt={artist}></img>
                <p>{songName}</p>
                <div className="songData">
                    <p>{artist}</p>
                    <p>{album}</p>                        
                </div>
                <p>{duration}</p>
            </li>
        ))}
        </div>
    )
}

export default Songs;
