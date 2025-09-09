import { Link } from "react-router";
import missingImg from "../Resources/missing.png"
import { ListSeacher, TitleSearcher } from "../Searcher/style";

const AlbumList =({albums})=>{

    return (
        <>
            <TitleSearcher>Álbumes disponibles</TitleSearcher>
            <ListSeacher className="listFound">            
                {albums.map(({idAlbum,strAlbum,strAlbumThumb,strArtist,intYearReleased,strTheme})=>(
                    <li key={idAlbum}>
                        <img src={strAlbumThumb?strAlbumThumb:missingImg} alt={`${strAlbum}_img`} ></img>
                        <p>{strAlbum}</p>
                        <div className="songData">
                            <p>{strArtist}</p>
                            <p>{intYearReleased}</p>                        
                        </div>
                        <p>Temática:<br/> {strTheme?strTheme:"Sin Dato"}</p>
                        <Link to={`/songs/${idAlbum}`} className="songs">Ver album</Link>
                    </li>
                ))}
            </ListSeacher>
        </>
    )
}

export default AlbumList;