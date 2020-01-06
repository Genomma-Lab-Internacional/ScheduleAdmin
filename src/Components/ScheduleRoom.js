import React, {useState} from "react"
import {schedule} from "./Constants/Schedule"
import {room} from "./Constants/Room"
import axios from "axios"

export default function ScheduleRoom() {
  const [ date, setDate ] = useState({})
  const [ hour, setHour ] = useState({})
  const [ rooms, setRooms ] = useState({})
  const [ room1, setRoom1] = useState({"800":false})

  const selectDate = (e) => {
    e.persist()
    date[e.target.name] = e.target.value
    axios.post("https://8ur4vxt8u5.execute-api.us-east-1.amazonaws.com/dev/miscelanea/verify-date-room",date)
      .then( success => {
        let room1 = success.data.Item.room1
        for (let i=0; i<room1.length; i++) {
            console.log(room1[i])
            if(room1[1]) {
              setRoom1({800:true})
            }
          // setRoom1({800:result[i][0]})
        }
      })
      .catch( error => console.log(error) ) 
  }

  const selectHour = (e) => {
    console.log(e.target.name,e.target.value)
    hour[e.target.name] = e.target.value		
  }
  

  const confirmRoom = () => {
    console.log(hour)
  }

  return (
    <section>
      <h2>Selecciona una Fecha</h2>
      <input onChange={selectDate} type="date" name="date"/>
      <div>
        <h2>Sala 1</h2>
        <div>
          {schedule.map( s => <button onClick={selectHour} type="text" name="room1"  value={s} disabled={room1[s]===true ? true : false}>{s}</button>)}
          <button onClick={confirmRoom}>Confirmar Sala</button>
        </div>
      </div>
      {/* {room.map( r => (
        <div>
          <h3>Sala {r}</h3>
            <div>
              {schedule.map( s => <button onClick={selectHour} type="text" name=`room-${r}`  value={s} disabled={rooms["room1"] ? true : false}> {s} </button>)}
              <br/>
              <button onClick={confirmRoom}>Confirmar Sala</button>
            </div>
        </div>
      ))} */}
    </section>
  )
}



            // <div>
            //     <h2>Sala 1</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-1"  value={s}>{s}</button>)}
            //         <button onClick={confirmRoom}>Confirmar Sala</button>
            //     </div>
            // </div>
            // <div>
            //     <h2>Sala 2</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-2"  value={s}>{s}</button>)}
            //     </div>
            // </div>
            // <div>
            //     <h2>Sala 3</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-3"  value={s}>{s}</button>)}
            //     </div>
            // </div>
            // <div>
            //     <h2>Sala 4</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-4"  value={s}>{s}</button>)}
            //     </div>
            // </div>
            // <div>
            //     <h2>Sala 5</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-5"  value={s}>{s}</button>)}
            //     </div>
            // </div>
            // <div>
            //     <h2>Sala 6</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-6"  value={s}>{s}</button>)}
            //     </div>
            // </div>
            // <div>
            //     <h2>Sala 7</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-7"  value={s}>{s}</button>)}
            //     </div>
            // </div>
            // <div>
            //     <h2>Sala 8</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-8"  value={s}>{s}</button>)}
            //     </div>
            // </div>
            // <div>
            //     <h2>Sala 9</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-9"  value={s}>{s}</button>)}
            //     </div>
            // </div>
            // <div>
            //     <h2>Sala 10</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-10"  value={s}>{s}</button>)}
            //     </div>
            // </div>
            // <div>
            //     <h2>Sala 11</h2>
            //     <div>
            //         {schedule.map( s => <button onClick={selectHour} type="text" name="room-11"  value={s}>{s}</button>)}
            //     </div>
            // </div>