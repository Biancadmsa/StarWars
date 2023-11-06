import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(()=>{actions.getCharacterProfile(params.theid)},[])
	return (
		<>
			<div class='d-flex justify-content-around' id='maincontainer'>
				<div class='d-flex flex-column align-items-center'id='imgcontainer'>
					<h4>{store.character.name}</h4>
					<img class="imgcharacter" src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}/>
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
								<td>Height</td>
								<td>{store.character.height}</td>
								</tr>
								<tr>
								<td>Mass</td>
								<td>{store.character.mass}</td>
								</tr>
								<tr>
								<td >Hair Color</td>
								<td>{store.character.hair_color}</td>
								</tr>
								<tr>
								<td >Skin Color</td>
								<td>{store.character.skin_color}</td>
								</tr>
								<tr>
								<td >Eye Color</td>
								<td>{store.character.eye_color}</td>
								</tr>
								<tr>
								<td >Birth Year</td>
								<td>{store.character.birth_year}</td>
								</tr>
								<tr>
								<td >Gender</td>
								<td>{store.character.gender}</td>
								</tr>
								<tr>
								<td >Homeworld</td>
								<td>{store.character.homeworld}</td>
								</tr>								
							</tbody>
						</table>
						<div class='container pb-5'>
							<h4>"A person within the Star Wars universe"</h4>
						</div>
				</div>
			</div>
			
		</>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};