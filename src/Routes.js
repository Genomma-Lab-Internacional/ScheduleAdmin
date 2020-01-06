import React from "react"
import { Switch, Route } from "react-router-dom"

import Index from "./Components/index"
import ScheduleRoom from "./Components/ScheduleRoom"

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={Index}/>
			<Route exact path="/schedule-rooms" component={ScheduleRoom}/>
		</Switch>
  )
}