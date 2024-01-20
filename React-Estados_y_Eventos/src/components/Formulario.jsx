import { useState } from "react";
import Alert from "./Alert";

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [otro, setOtro] = useState('');

    

    return (
        <>
        <form>
            <Alert/>
            <div className="form-group">
                <label>Nombre</label>
                    <input 
                    type="text" 
                    name="nombre"
                    className="form-control"
                    onChange={(e) => (e.target.value)}
                    value={nombre}/>
            </div>
            <div className="form-group">
                <label>Email</label>
                    <input 
                    type="text" 
                    name="email"
                    className="form-control"
                    onChange={(e) => (e.target.value)}
                    value={email}/>
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                    <input 
                    type="text" 
                    name="contraseña"
                    className="form-control"
                    onChange={(e) => (e.target.value)}
                    value={contraseña}/>
            </div>
            <div className="form-group">
                <label>Repita Contraseña</label>
                    <input 
                    type="text" 
                    name="otro"
                    className="form-control"
                    onChange={(e) => (e.target.value)}
                    value={otro}/>
            </div>
            <button type="submit" className="btn btn-success">Enviar</button>
        </form>
        </>
    );
};

export default Formulario;