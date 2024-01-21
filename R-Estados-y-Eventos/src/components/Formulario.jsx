import { useState } from "react";
import './Formulario.css';
import Button from 'react-bootstrap/Button';

const Formulario = ( {Alert} ) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confiCont, setConfiCont] = useState('');

    const validarDatos = (e) => {
        e.preventDefault();

        if ( nombre === '' || email === '' || contraseña === '' || confiCont === '') {

            Alert('Debe completar todos los campos.');
        } else if (contraseña !== confiCont) {
            Alert('Las contraseñas no coinciden.');
        } else {
            Alert('¡Felicitaciones, te registraste exitosamente!');
        };
    };

    return (
        <>
            <form onSubmit={validarDatos}>
                <div className="form-content">
                    <input 
                    type="text" 
                    placeholder="Nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}/>

                    <input 
                    type="text" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>

                    <input 
                    type="text" 
                    placeholder="Contraseña"
                    onChange={(e) => setContraseña(e.target.value)}
                    value={contraseña}/>

                    <input 
                    type="text" 
                    placeholder="Repita la contraseña"
                    onChange={(e) => setConfiCont(e.target.value)}
                    value={confiCont}/>

                    <Button variant='success' type="submit">Enviar</Button>
                </div>
            </form>
        </>
    );
};

export default Formulario;