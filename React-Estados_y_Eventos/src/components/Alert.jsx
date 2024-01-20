import { useState } from "react";

const Alert = () => {
    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();

        if (nombre === '' || email === '' || contraseña === '' || otro === '') {
            setError(true);
            return;
        };
        setError(false);
        setNombre('');
        setEmail('');
        setContraseña('');
        setOtro('')
    };

    return (
        <form className="formulario" onSubmit={validarDatos}>
            {error ? <p>Todos los campos son obligatorios</p> : <p>¡Felicidades, has completado tu formulario!</p>}
        </form>
    );
};

export default Alert;