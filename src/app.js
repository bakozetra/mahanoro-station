import React from 'react'
import CityStation from "./component/cityStation"
import { Switch, Route} from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" >
        <CityStation></CityStation>
        </Route>
      </Switch> 
    </div>
  )
}