import React,{useEffect, useRef, useState} from "react";
import "./styles.css";
import useFetchAlbumsByWord from "../Hooks/fetchAlbumsByWord";
import AlbumList from "../Albums/albums";

const Searcher =()=>{

    const [word,setWord]=useState("")
    const {isLoadingAlbum,errorAlbum,albums}=useFetchAlbumsByWord(word);
    
    const inputRef=useRef();

    const handleSearch=()=>{        
        setWord (inputRef.current.value);        
    };

    const handleKeyInput=(e)=>{
        if (e.key=="Enter"){
            handleSearch();
        }
    }
    const renderLoad =()=>(
        <p>Cargando...</p>        
    );

    const renderError=()=>(        
        <p>Hubo un problema al cargar los datos. Intenta nuevamente</p>
    );

    const renderNoFound=()=>(
        <p>Lo sentimos, no contamos con referencia de la búsqueda</p>
    );   

    const renderContent=()=>{
        if (word=="") return null;
        if (isLoadingAlbum) return renderLoad();
        if (errorAlbum) return renderError();            
        if (albums.length>0) return <AlbumList albums={albums}/>;        
        return renderNoFound();        
    }    

    return(
       <>
            <div className="containerSearcher">
                <input ref={inputRef} className="inputSearcher" type="text" onKeyDown={handleKeyInput} defaultValue={word || ""}></input>
                <button className="buttonSearcher" onClick={handleSearch}>
                    <svg className="iconSearcher" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
            </div>                            
            {renderContent()}                      
        </>
    )    
}       
export default Searcher;