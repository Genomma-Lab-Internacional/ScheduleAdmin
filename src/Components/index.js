import React from "react"

export default function Index () {
    
    const data = (e) => {
        console.log(e.target.name,e.target.value)
    }

    const sendDataToServer = () => {

    }

    return (
        <div>
            <input onChange={data} type="text" name="employee" placeholder="Ingresa tu nombre"/>
            <br/>
            <input onChange={data} type="text" name="numEmployee" placeholder="Ingresa tu numero de empleado"/>
            <br/>
            <button onClick= {sendDataToServer}  >Enviar</button>
        </div>
    )
}