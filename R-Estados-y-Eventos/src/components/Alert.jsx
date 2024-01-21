import React from "react";

const Alert = ( {alerta} ) => {
    return (
        <>
            {alerta && ( <div className= {alerta.includes('correcto') ? 'alert-success' : 'alert-danger'}>
                {alerta}
            </div>
            )};
        </>
    );
};

export default Alert;