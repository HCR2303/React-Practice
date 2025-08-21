import React, { Component } from "react";
import axios from "axios"; //Se implementará una API para la generación de información sobre musica agregando la funcionalidad del buscador
import styles from "./styles.css"
import missingImg from "./missing.png"

class Songs extends Component{
    constructor(props){
        super(props);
        this.state={
            urlImg:missingImg,
            title:"desconocido_album"
        }
    }

    render(){
        return (
            <div className="listFound">
                <li>
                    <img src={this.state.urlImg} alt={this.state.title}></img>
                    <p>Cancion 1</p>
                    <div className="songData">
                        <p>Artista</p>
                        <p>Album</p>                        
                    </div>
                    <p>Duración</p>
                </li>
                <li>
                    <img src={this.state.urlImg} alt={this.state.title}></img>
                    <p>Cancion 2</p>
                    <div className="songData">
                        <p>Artista</p>
                        <p>Album</p>                        
                    </div>
                    <p>Duración</p>
                </li>
                <li>
                    <img src={this.state.urlImg} alt={this.state.title}></img>
                    <p>Cancion 3</p>
                    <div className="songData">
                        <p>Artista</p>
                        <p>Album</p>                        
                    </div>
                    <p>Duración</p>
                </li>
            </div>
        )
    };
}

export default Songs;
