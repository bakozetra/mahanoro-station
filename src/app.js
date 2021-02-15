import React from 'react'
import CityStation from "./component/cityStation"
import { Switch, Route} from 'react-router-dom';
import BookSeats  from './component/bookSeat';
import TripBokking from './component/tripBokking';
export default function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" >
        <CityStation></CityStation>
        </Route>
        <Route  exact path="/:seats">
         <TripBokking></TripBokking>
        </Route>
        <Route path="/:seats/:booking">
         <BookSeats></BookSeats>
        </Route>
      </Switch> 
    </div>
  )
}