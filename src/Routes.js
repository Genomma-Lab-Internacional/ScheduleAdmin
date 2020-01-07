import React from "react"
import { Switch, Route } from "react-router-dom"

import Index from "./Components/index"
import ScheduleRoom from "./Components/ScheduleRoom"
import CancelScheduleRooms from "./Components/CancelScheduleRooms"

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={Index}/>
			<Route exact path="/schedule-rooms" component={ScheduleRoom}/>
			<Route exact path="/cancel-schedule-rooms/:numEmployee" component={CancelScheduleRooms}/>
		</Switch>
  )
}