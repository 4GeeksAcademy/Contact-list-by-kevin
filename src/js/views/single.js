import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useActionData, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaAcquisitionsIncorporated, FaUserEdit } from "react-icons/fa";



export const Single = props => {


	// AGREGAR PUT para actualizar contactos, tiene que tener una logica para escuchar los datos de un formulario//
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

	const { store, actions } = useContext(Context);

	const [actContact, setactContact] = useState({
		"full_name": "",
		"email": "",
		"agenda_slug": "agenda_kevin",
		"address": "",
		"phone": ""
	})

	const getContact = () => {
		fetch(`https://playground.4geeks.com/apis/fake/contact/${params.theid}`, {
			method: "get",
		})
			.then(response => response.json())
			.then(data => setactContact(data))
			.catch(error => ('Error fetching data:', error));
	};

	const onDelete = (id) => {
		actions.deleteContact(id)		
		navigate("/demo");
		actions.loadAgendaData()
		
	}

	useEffect(() => {
		getContact();
	}, [])
	
	const params = useParams();
	const navigate = useNavigate ();


	if (!actContact) {
		return <div>Contacto no encontrado</div>;
	}

	return (
		<div className="container mt-5">
			<div className="card">
				<div className="card-header">
					<h2>Información del Contacto</h2>
				</div>
				<div className="card-body">
					<h4 className="card-title">{actContact.full_name}</h4>
					<p className="card-text">Email: {actContact.email}</p>
					<p className="card-text">Telefono: {actContact.phone}</p>
					<p className="card-text">Dirección: {actContact.address}</p>
				</div>
			</div>
			<Link to="/demo" className="btn btn-primary m-3">
				Volver a la Agenda
			</Link>
			<Link to={`/editarContacto/${actContact.id}`} className="btn btn-success m-3">
				<FaUserEdit /> Editar Contacto
			</Link>
			<Link to="/demo">
				<button type="submit" className="btn btn-danger m-3" onClick={() => onDelete(actContact.id)}>elinimar contacto</button>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
