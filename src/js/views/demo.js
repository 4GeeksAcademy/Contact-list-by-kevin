import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
console.log(store.agenda);
	return (
		<div className="container">
			<ul className="list-group">
				{store.agenda.map((contacto) => (
					<div key= {contacto.id}>
					<li>{contacto.full_name}</li>
					<li>{contacto.email}</li>
					</div>
				))}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
