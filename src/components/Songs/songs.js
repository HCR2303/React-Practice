import React, { useEffect, useState } from "react";
//import axios from "axios"; //Se implementará una API para la generación de información sobre musica agregando la funcionalidad del buscador
import "./styles.css"
import missingImg from "../Resources/missing.png"

const Songs=()=>{
    
    const [SONGS,setSongs]=useState([]);//recuerda que se genera un tipado con el HOOK use STATE (linea 19)
    
    const apiSongs=[
        //-------->OJO: las variables fuera del bloque return llevan una sintaxis sin {} 
        {id:"1",imagen:missingImg,songName:"Cancion 1",artist:"Artista",album:"Album",duration:"3:25"},
        {id:"2",imagen:missingImg,songName:"Cancion 2",artist:"Artista",album:"Album",duration:"4:01"},
        {id:"3",imagen:missingImg,songName:"Cancion 3",artist:"Artista",album:"Album",duration:"3:11"}
    ];
    
    // se debe de utilizar el método setSongs dentro de use effect ya que sino se causará un bucle de actualización infinita
    useEffect(() => {
        setSongs(apiSongs);//por lo que se recibe un array
    }, []);
     
    
    return (
        <div className="listFound">
            <h2>Biblioteca</h2>
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
