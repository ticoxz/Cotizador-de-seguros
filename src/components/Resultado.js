import React from 'react';

const Resultado = ({ cotizacion }) => {
    return (
        (cotizacion === 0) ? <p>Elige marca, año y tipo de seguro</p> : cotizacion
    )
}

export default Resultado;