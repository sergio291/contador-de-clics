import React  from 'react';
import '../hojas-de-estilo/Contador.css';

function Contador ({ numClics }) {
    return (
        <div className='Contador'>
            {numClics}
        </div>
    );
}

export default Contador;