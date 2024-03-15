import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";


export const Demo = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadAgendaData()
	}, [])

	return (
		<div className="container mt-5">
			<div className="row">
				{store.agenda.map((contact) => (
					<div key={contact.id} className="col-md-12 mb-4 bg-secondary bg-opacity-25">
						<div className="card-body">
							<h5 className="card-title">{contact.full_name}</h5>
							<p className="card-text">Email: {contact.email}</p>
							<p className="card-text">Phone: {contact.phone}</p>
							<p className="card-text">adress: {contact.address}</p>
							<Link 
								to={`/single/${contact.id}`} 
								className="btn btn-primary"> Ver Contacto</Link>
						</div>
					</div>
				))}
				<br />
				<Link to="/">
					<button className="btn btn-primary col-2">Back home</button>
				</Link>
				<Link to="/formulario">
					<button className="btn btn-success mt-2 col-2">crear contacto</button>
				</Link>
			</div>
		</div>
	);
};
