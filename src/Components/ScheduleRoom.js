import React, {useState} from "react"
import {schedule} from "./Constants/Schedule"
import axios from "axios"

export default function ScheduleRoom() {
  const [ date ] = useState({})
  const [ hour ] = useState({})
  const [ room1, setRoom1] = useState({})
  const [ room2, setRoom2] = useState({})
  const [ room3, setRoom3] = useState({})
  const [ room4, setRoom4] = useState({})
  const [ room5, setRoom5] = useState({})

  const selectDate = (e) => {
    date[e.target.name] = e.target.value
    axios.post("https://8ur4vxt8u5.execute-api.us-east-1.amazonaws.com/dev/miscelanea/verify-date-room",date)
      .then( success => {
        setRoom1({ 
          800:success.data.Item.room1[800],
          900:success.data.Item.room1[900],
          1000:success.data.Item.room1[1000],
          1100:success.data.Item.room1[1100],
          1200:success.data.Item.room1[1200],
          1300:success.data.Item.room1[1300],
          1400:success.data.Item.room1[1400],
          1500:success.data.Item.room1[1500],
          1600:success.data.Item.room1[1200],
          1700:success.data.Item.room1[1300],
          1800:success.data.Item.room1[1400],
          1900:success.data.Item.room1[1500] 
         })
         setRoom2({ 
          800:success.data.Item.room2[800],
          900:success.data.Item.room2[900],
          1000:success.data.Item.room2[1000],
          1100:success.data.Item.room2[1100],
          1200:success.data.Item.room2[1200],
          1300:success.data.Item.room2[1300],
          1400:success.data.Item.room2[1400],
          1500:success.data.Item.room2[1500],
          1600:success.data.Item.room2[1200],
          1700:success.data.Item.room2[1300],
          1800:success.data.Item.room2[1400],
          1900:success.data.Item.room2[1500] 
         })

      })
      .catch( error => console.log(error) ) 
  }

  const selectHour = (e) => hour[e.target.name] = e.target.value
  

  const confirmRoom = () => {
    let test= {...date,...hour}
    axios.post("https://8ur4vxt8u5.execute-api.us-east-1.amazonaws.com/dev/miscelanea/create-date-room",test)
      .then( success => console.log(success) )
      .catch( error => console.log(error) )
  }

  return (
    <section>
      <h2>Selecciona una Fecha</h2>
      <input onChange={selectDate} type="date" name="date"/>
      <div>
        <h3>Sala 1</h3>
        <div>
          {schedule.map( s => <button key={s} onClick={selectHour} type="text" name={`room1-${s}`} value={s} disabled={room1[s] === true ? true : false}>{s}</button>)}
          <button onClick={confirmRoom}>Confirmar Sala</button>
        </div>
      </div>
      <div>
        <h3>Sala 2</h3>
        <div>
          {schedule.map( s => <button key={s} onClick={selectHour} type="text" name="room2" value={s} disabled={room2[s] === true ? true : false}>{s}</button>)}
          <button onClick={confirmRoom}>Confirmar Sala</button>
        </div>
      </div>
      <div>
        <h3>Sala 3</h3>
        <div>
          {schedule.map( s => <button key={s} onClick={selectHour} type="text" name="room3" value={s} disabled={room3[s] === true ? true : false}>{s}</button>)}
          <button onClick={confirmRoom}>Confirmar Sala</button>
        </div>
      </div>
      <div>
        <h3>Sala 4</h3>
        <div>
          {schedule.map( s => <button key={s} onClick={selectHour} type="text" name="room4" value={s} disabled={room4[s] === true ? true : false}>{s}</button>)}
          <button onClick={confirmRoom}>Confirmar Sala</button>
        </div>
      </div>
      <div>
        <h3>Sala 5</h3>
        <div>
          {schedule.map( s => <button key={s} onClick={selectHour} type="text" name="room5" value={s} disabled={room5[s] === true ? true : false}>{s}</button>)}
          <button onClick={confirmRoom}>Confirmar Sala</button>
        </div>
      </div>
   

      {/* {room.map( r => (
        <div>
          <h3>Sala {r}</h3>
            <div>
              {schedule.map( s => <button onClick={selectHour} type="text" name={`room${r}`} value={s} disabled={`room${r}[${s}]`=== true ? true : false}> {s} </button>)}
              <br/>
              <button onClick={confirmRoom}>Confirmar Sala</button>
            </div>
        </div>
      ))} */}
    </section>
  )
}
