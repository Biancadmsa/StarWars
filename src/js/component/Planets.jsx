import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = ()=>{
    const {store, actions} = useContext(Context)
    useEffect(()=>{actions.getPlanets()}, [])
    return(
        <>
            <h1>Planets</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.planets.map((planet, id)=>(
                    <div className="card" key={id} style={{width: '18rem', flex: 'none', margin:'10px'}}>
                        <img src={"https://starwars-visualguide.com/assets/img/planets/"+(id + 1)+".jpg"} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{planet.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={"/planet/" + (id + 1)} className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}