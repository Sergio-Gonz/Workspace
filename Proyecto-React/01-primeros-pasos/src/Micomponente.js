//importar modulos de react/ dependencias
import React, {fragment} from 'react';


//funcion del componente
const Micomponente = () => {
return (
    // <fragment>
    <div className="mi-componente">
    <hr/>
    <h2>Componente creado</h2>
    <p>Este es mi primer componente</p>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
     {/* </fragment> */}
    </div>

);
};

//exportar componente
export default Micomponente;