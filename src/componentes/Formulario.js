import React, { useState } from 'react'
import PantallaDeCajas from './PantallaDeCajas'


const Formulario = (props) => {

    const [stateColor, setStateColor] = useState({
        color: ""
    })
    const [stateBoxes, setStateBoxes] = useState([])

    const onChange = (e) => {
       const {name,value} = e.target
       setStateColor({
           ...stateColor,
           [name]:value
       })
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        setStateBoxes(
            [...stateBoxes,{color: stateColor.color, width: 300, height:300}]
        )
    }
    
    return (
        <div>
           <form onSubmit={onSubmit}>
                <div className="row">
                    <label htmlFor="color">Color</label>
                    <input type="color" name="color" value={stateColor.color} onChange={onChange}/>
                    <button type="submit"> Agregar</button>
                </div>
            </form> 
            <PantallaDeCajas boxes={stateBoxes}/>
        </div>
    )
}

export default Formulario;

/*<form>
<h1> Generador de Cajas</h1>
<p><label> Selecciona el color:  </label>
<input type="color" name="color" value={generador.color}></input></p>
<button type="button"> Agregar</button>
</form>*/
