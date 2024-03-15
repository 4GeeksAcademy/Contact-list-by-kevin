import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



const Formulario = () => {
    const [contact, setContact] = useState({
        "full_name": "",
        "email": "",
        "agenda_slug": "agenda_kevin",
        "address": "",
        "phone": ""
    })
    const { store, actions } = useContext(Context);


const newContact = (e) => {
    e.preventDefault()
    actions.createdContact(contact)
    setContact({
        "full_name": "",
        "email": "",
        "agenda_slug": "agenda_kevin",
        "address": "",
        "phone": ""
    });
    navigate("/demo");

}



    return (
        <div>
            <form onSubmit={newContact}>
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
                <button type='submit'>guardar contacto</button>
            </form>
            <Link to="/demo">
				<button className="btn btn-danger mx-3">ver contactos</button>
			</Link>
        </div>
    )
}

export default Formulario
