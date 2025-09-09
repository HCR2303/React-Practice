import { useParams } from 'react-router-dom';
import useFetchMusicByAlbum from '../Hooks/fetchMusicByIdAlbums';
import missingImg from "../Resources/missing.png"
import { ListSongs, TitleSong } from './style';

const Songs=()=>{
    
    const {id}=useParams();
    
    const {isLoadingAlbumMusic,errorAlbumMusic,albumMusic}=useFetchMusicByAlbum(id)    

    const renderLoad=()=>(
        <p>Cargando...</p>
    )

    const renderError=()=>(
        <p>Error al cargar las canciones del album, regresa a intentar de nuevo</p>
    )

    const renderSongs=()=>(
        <>
            <TitleSong>Canciones del Album "{albumMusic[0].strAlbum}"</TitleSong>
            <ListSongs className="listFound">
                    {albumMusic.map(({idTrack,strTrackThumb,strTrack,strStyle,strMusicVid})=>(
                    /*se realiza una identificación para el elemento li mediante key instead id*/
                    
                    <li key={idTrack}>
                        <a key={idTrack} href={strMusicVid} target="_blank" rel="noopener noreferrer">
                            <img src={strTrackThumb?strTrackThumb:missingImg} alt={`${strTrack}_img`}></img>
                        </a>
                        <p>{strTrack}</p>
                        <div className="songData">
                            <p>Estilo:</p>
                            <p>{strStyle?strStyle:"Sin Dato"}</p>                        
                        </div>                        
                    </li>
                
                ))}
            </ListSongs>
        </>
    )
   
    const renderContent=()=>{
        if (!albumMusic) return null;
        if (isLoadingAlbumMusic) return renderLoad();
        if (errorAlbumMusic) return renderError();
        return renderSongs();
    }     
    
    return renderContent();
    
}

export default Songs;
