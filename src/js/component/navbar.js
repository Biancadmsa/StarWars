import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import './nav.css'
//import logo from '../../img/starwars_logo.png'

export const Navbar = () => {
	const {store, actions} = useContext(Context)

	return (
			<nav class="navbar navbar-expand-lg bg-body-tertiary">
				<div class="container" id='navcontainer'>
					<div class='container' id='logodiv'>
						<Link to={'/'}><a class="navbar-brand">starwars</a></Link>
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
						</button>
					</div>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav">
						<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites({store.favorites.length})
						</a>
						<ul class="dropdown-menu">
							{store.favorites.map((favorite, id)=>(
								<div className="d-flex justify-content-between">
									<Link to={`${favorite.type}/${id + 1}`} key={id}><li><a class="dropdown-item">{favorite.name}</a></li></Link>
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
