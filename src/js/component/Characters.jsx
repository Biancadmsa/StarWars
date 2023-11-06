import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = ()=>{
    const {store, actions} = useContext(Context)
    useEffect(()=>{
        actions.getCharacters()
    },[])

    const favoriteClick = (character, id)=>{
        id = id + 1
        character.type = 'character'
        character.id = id
        if(store.favorites.includes(character)){
            actions.deleteFavorite(character)
        } else {
            actions.addFavorite(character)
        }       
    }
    return(
        <>
            <h1>Characters</h1>
            <div className="card-group">
            <div className="d-flex flex-row overflow-scroll">
                {store.characters.map((character, id)=>(
                <div className="card" key={id} style={{width: '18rem', flex: 'none', margin:'10px'}}>
                    <img loading="eager" src={"https://starwars-visualguide.com/assets/img/characters/"+(id + 1)+".jpg"} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p classNAme="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex justify-content-between ">
                            <Link to={"/character/" + (id + 1)} class="btn btn-primary bg-green">Learn More</Link>
                            <>
                            <button>
                            <a onClick={()=>favoriteClick(character, id)}>&#10084;</a>
                            </button>
                            </>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
            
        </>
    )
}