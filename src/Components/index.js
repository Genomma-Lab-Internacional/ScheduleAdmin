import React, { useState } from "react"

export default function Index (props) {
	const [ user ] = useState({})

	const data = e => user[e.target.name] = e.target.value

	const sendDataToServer = ( ) => {
		props.history.push("/schedule-rooms")
	}

	const cancelDate = ( ) => {
		props.history.push(`/cancel-schedule-rooms/${user["numEmployee"]}`)
	}

	return (
		<div>
			<input onChange={data} type="text" name="numEmployee" placeholder="Ingresa tu numero de empleado"/>
			<br/>
			<button onClick={sendDataToServer} >Reserva Sala</button>
			<button onClick={cancelDate}>Cancela Sala</button>
		</div>
	)
}