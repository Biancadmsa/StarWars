import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(()=>{actions.getPlanetProfile(params.id)},[])
	return (
		<>
			<div class='d-flex justify-content-around' id='maincontainer'>
				<div class='d-flex flex-column align-items-center'id='imgcontainer'>
					<h4>{store.planet.name}</h4>
					<img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}/>
				</div>
				<div class='d-flex flex-column justify-content-between pt-5' id='infocontainer'>
						<table class="table">
							<thead>
								<tr>
								<th scope="col-6">Characteristic</th>
								<th scope="col-6">Value</th>
								</tr>
							</thead>
							<tbody>
								<tr>
								<td>Rotation Period</td>
								<td>{store.planet.rotation_period}</td>
								</tr>
								<tr>
								<td>Orbital Period</td>
								<td>{store.planet.orbital_period}</td>
								</tr>
								<tr>
								<td >Diameter</td>
								<td>{store.planet.diameter}</td>
								</tr>
								<tr>
								<td >Climate</td>
								<td>{store.planet.climate}</td>
								</tr>
								<tr>
								<td >Gravity</td>
								<td>{store.planet.gravity}</td>
								</tr>
								<tr>
								<td >Terrain</td>
								<td>{store.planet.terrain}</td>
								</tr>
								<tr>
								<td >Surface Water</td>
								<td>{store.planet.surface_water}</td>
								</tr>
								<tr>
								<td >Population</td>
								<td>{store.planet.population}</td>
								</tr>								
							</tbody>
						</table>
						<div class='container pb-5'>
							<h4>"A planet within the Star Wars universe"</h4>
						</div>
				</div>
			</div>
			
		</>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};