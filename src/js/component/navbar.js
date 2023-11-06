import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import './nav.css'
//import logo from '../../img/starwars_logo.png'

export const Navbar = () => {
	const {store, actions} = useContext(Context)

	return (
			<nav class="navbar navbar-expand-lg text-warning bg-black">
				<div class="container" id='navcontainer'>
					<div class='container' id='logodiv'>
						<Link to={'/'}>
						<img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"
            alt="star wars logo"
            width={"128px"}
          />
						</Link>
						
						<button class="navbar-toggler text-warning bg-white  border-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
						</button>
					</div>
					
					<div class="collapse navbar-collapse text-warning bg-white" id="navbarNavDropdown">
					<ul class="navbar-nav">
						<li class="nav-item dropdown text-warning bg-white">
						<a class="nav-link dropdown-toggle text-warning bg-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<span>Favorites</span>({store.favorites.length})
						</a>
						<ul class="dropdown-menu text-warning bg-white">
							{store.favorites.map((favorite, id)=>(
								<div className="d-flex justify-content-between text-warning bg-white">
									<Link to={`${favorite.type}/${favorite.id}`} key={id}><li><a className="dropdown-item text-black bg-white">{favorite.name}</a></li></Link>
									<a onClick={()=>{actions.deleteFavorite(favorite)}}>&#128465;</a>
								</div>
							))}
						</ul>
						</li>
					</ul>
					</div>
					</div>
				
			</nav>
	);
};
