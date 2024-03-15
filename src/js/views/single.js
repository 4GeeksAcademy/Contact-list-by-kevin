import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {

	
			// AGREGAR PUT para actualizar contactos, tiene que tener una logica para escuchar los datos de un formulario//
			// (ESTE ES MI PUT, FALTA RELLENAR) //
			actContactList: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agenda_kevin", {
					method: "PUT",
					body: JSON.stringify(),
					headers: {
						"content-type": "application/json",
					},
				})
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => ('Error fetching data:', error))
			} 

			// AGREGAR DELETE para borrar contactos//
			//(MI DELETE, FALTA RELLENAR)//
			/* deleteContactList: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agenda_kevin", {
					method:"DELETE",
					body: JSON.stringify(),
					headers: {
						"content-type": "application/json", 
					},
				})
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => ('Error fetching data:', error))
			} */

	const { store } = useContext(Context);
	

	const params = useParams();
		
	const contact = store.agenda.find(contact => contact.id === parseInt(params.id));

	if (!contact) {
		return <div>Contacto no encontrado</div>;
	}
	
	return (
		<div className="container mt-5">
			<div className="card">
				<div className="card-header">
					<h2>Información del Contacto</h2>
				</div>	
				<div className="card-body">
					<h4 className="card-title">{contact.full_name}</h4>
					<p className="card-text">Email: {contact.email}</p>
					<p className="card-text">Telefono: {contact.phone}</p>
					<p className="card-text">Dirección: {contact.address}</p>
				</div>
			</div>
			<Link to="/demo" className="btn btn-primary mt-3">
				Volver a la Agenda
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
