import React, { useEffect } from 'react'
import CityStation from "./component/cityStation"
import { Switch, Route, Link } from 'react-router-dom';
import BookSeats from './component/bookSeat';
import TripBokking from './component/tripBokking';
import Account from './component/account';
import { connect } from 'react-redux';
import { getCity } from './actions';
import { Header } from './styles';
import ImageCar from "./image/Vector.png"
function App({ getCity, city }) {
  console.log(city);
  useEffect(() => {
    getCity()
  }, [])

  return (
    <>
      <Header>
        <Header.Content>
          <Header.Image  src={ImageCar}/>
          <Header.Title>Mahanoro Station</Header.Title>
        </Header.Content>
        <Link to="/count">
          <Header.SubTitle>My account</Header.SubTitle>
        </Link>
      </Header>
      <Switch>
        <Route exact path="/" >
          <CityStation></CityStation>
        </Route>
        <Route exact path="/count">
          <Account></Account>
        </Route>
        <Route exact path="/:seats">
          <TripBokking city={city}></TripBokking>
        </Route>
        <Route exact path="/:seats/:booking">
          <BookSeats city={city}></BookSeats>
        </Route>
      </Switch>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    city: globalState.city,
  }
}

const mapDispatchToProps = {
  getCity
};

export default connect(mapStateToProps, mapDispatchToProps)(App)