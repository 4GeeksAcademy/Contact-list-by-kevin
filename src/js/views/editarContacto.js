import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";



const EditarContacto = () => {
    const [contact, setContact] = useState({
        "full_name": "",
        "email": "",
        "agenda_slug": "agenda_kevin",
        "address": "",
        "phone": ""
    })
    const { store, actions } = useContext(Context);

    const getContact = () => {
		fetch(`https://playground.4geeks.com/apis/fake/contact/${params.theid}`, {
			method: "get",
		})
			.then(response => response.json())
			.then(data => setContact(data))
			.catch(error => ('Error fetching data:', error));
	};
	
	useEffect(() => {
		getContact();
	}, [])

	const params = useParams();
    const navigate = useNavigate ();


const editContact = (e) => {
    e.preventDefault()
    actions.editContact(contact)
    setContact({
        "full_name": "",
        "email": "",
        "agenda_slug": "agenda_kevin",
        "address": "",
        "phone": "",
        "id": params.theid
    });
    navigate("/demo");
    actions.loadAgendaData()
    

}



    return (
        <div>
            <form onSubmit={editContact}>
                <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input 
                        onChange={(e) => setContact({...contact,full_name:e.target.value})}
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Leonel Andres Messi Cuccittini" 
                        value={contact.full_name}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                        onChange={(e) => setContact({...contact,email:e.target.value})}
                        type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="leo10@example.com" 
                        value={contact.email}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input 
                        onChange={(e) => setContact({...contact,phone:e.target.value})}
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="666.666.666" 
                        value={contact.phone}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input 
                        onChange={(e) => setContact({...contact,address:e.target.value})}
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Leo Messi, 3, Madrid"
                        value={contact.address} 
                    />
                </div>
                <button type='submit' className="btn btn-warning m-3">guardar contacto</button>
            </form>
            <Link to="/demo">
				<button className="btn btn-danger mx-3">volver a la agenda</button>
			</Link>
        </div>
    )
}

export default EditarContacto
