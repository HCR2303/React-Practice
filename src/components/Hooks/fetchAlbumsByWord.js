import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchAlbumsByWord =(word)=>{
    const [isLoadingAlbum,setLoad]=useState(true);
    const [errorAlbum,setError]=useState(null);
    const [albums,setAlbums]=useState([]);    

    useEffect(()=>{

        if (!word){
            setLoad(false);
            return;
        }

        setLoad(true);
        setError(null);
        setAlbums([]);

        let flagSearch=true;

        const searchByWord =async ()=>{
            try {
                if(flagSearch){                
                    const response=await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${word.toLowerCase()}`);
                    if (response.data){
                        setAlbums(response.data.album || []);                                       
                    }else{
                        setAlbums([]);
                    }
                    setLoad(false); 
                }                               
            } catch (error) {
                if (flagSearch){
                    setError(`Error en fetchMusicByWord: ${error}`);
                    setLoad(false);
                }                
            }            
        }
        searchByWord()

        return ()=>{
            flagSearch=false;
        }
    },[word])
    return {isLoadingAlbum,errorAlbum,albums};
}

export default useFetchAlbumsByWord;

