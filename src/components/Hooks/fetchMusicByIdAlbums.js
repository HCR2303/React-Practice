import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchMusicByAlbum =(album) =>{
    const [isLoadingAlbumMusic,setLoad]=useState(true);
    const [errorAlbumMusic,setError]=useState(null);
    const [albumMusic,setAlbumsByArtist]=useState([])
    

    useEffect (()=>{

        if (!album){
            setLoad(false);
            return;
        }

        setLoad(true);
        setError(null);
        setAlbumsByArtist([]);

        let flagMusic=true;

        const searchMusicByAlbum = async ()=>{
            try {
                if (flagMusic){
                
                    const response=await axios.get(`https://www.theaudiodb.com/api/v1/json/123/track.php?m=${album}`)
                    if (response.data && response.data.track){
                        setAlbumsByArtist(response.data.track || []);
                    }else{
                        setAlbumsByArtist([]);
                    }
                    setLoad(false);
                }
            } catch (error) {
                if (flagMusic){
                    setError(error);
                    setLoad(false);
                }                
            }
        }
        searchMusicByAlbum();
        
        return ()=>{
            flagMusic=false;
        }
    },[album])
    return {isLoadingAlbumMusic,errorAlbumMusic,albumMusic};
}
export default useFetchMusicByAlbum;