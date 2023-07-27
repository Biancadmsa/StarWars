import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/Characters.jsx";
import { Planets } from "../component/Planets.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<Characters />
		<Planets />
	</div>
);
