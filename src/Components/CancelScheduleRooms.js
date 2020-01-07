import React, { useState, useEffect } from "react"
import axios from "axios"

export default function CancelScheduleRooms (props) {
  const [ user ] = useState({})

  useEffect( ( ) => {
    user["numEmployee"] = props.match.params.numEmployee
    axios.post("https://8ur4vxt8u5.execute-api.us-east-1.amazonaws.com/dev/miscelanea/cancel-date-room",user)
      .then( success => {
        for (let i=0; i<success.data.Items.lenght; i++) {
          // test[Object.keys(success.data.Items[i])] = Object.values(success.data.Items[i])
          console.log("hola")
        }
      })
      .catch( error => console.log(error,"ERROR") )
  }, [ ] ) 

  return(
    <div>
      {user.user ?<p>date1.user</p> : <p></p>}
    </div>
  )
}