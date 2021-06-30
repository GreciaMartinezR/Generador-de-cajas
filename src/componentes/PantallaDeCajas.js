import React from 'react'

const PantallaDeCajas = (props) => {

    return (
        <div>
            <h1> Cajas: </h1>
            <div>
                {props.boxes.map((box,i) => <div style={{width:box.width, height:box.height, backgroundColor:box.color, display:'inline-block', margin:5}} key={i}></div>)}
            </div> 
        </div>
    )
}

export default PantallaDeCajas;