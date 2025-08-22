import React,{useEffect, useState} from "react";
import "./styles.css";
import missingImg from "../Resources/missing.png"


const Buscador =()=>{
    
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
    

    //Se crea función para contener solo la canción "cliqueada"
    const selectedSong=(songID)=>{
        return apiSongs.find(song=>song.id===songID);
    }

    //Se nombra una función para el efecto del click en el button
    const handleClick=(songID)=>{
        
        console.log(`La canción ${selectedSong(songID).songName} ha sido agregada exitosamente!`)
    }

    return(
        <>
            <div className="containerSearcher">
                <input className="inputSearcher" type="text"></input>
                <button className="buttonSearcher">
                    <svg className="iconSearcher" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
            </div>
            <div className="listFound">
                <h2>Resultados</h2>
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
                        {/*serequiere de una función que llama a otra función ya que se requiere de la llamada de una variable (id) */}
                        <button className="addLibrary" onClick={()=>handleClick(id)}>Agregar a biblioteca</button>
                    </li>
                ))}    
            </div>
        </>
    )
}

export default Buscador;