import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCity } from "../actions/index"
import { Seats } from "../styles";
import { Link } from "react-router-dom"
import moment from 'moment';


function TripBooking({ getCity, city }) {
  let { seats } = useParams();
  console.log(seats);
  let cityFilter = city?.filter(seat => seat.destination == seats);
  console.log(cityFilter);
  useEffect(() => {
    getCity()
  }, [])

  console.log(city);
  return (
    <div>
      {
        cityFilter?.map(seat => {
          const showDate = (moment(new Date(seat.departureTime)).format('DD-MMM-YYYY'));
          console.log(seat.seats.length);
          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          var d = new Date(seat.departureTime);
          var dayName = days[d.getDay()];
          return (
            <div>
              <Seats>
                <Seats.Image />
                <Seats.Paragraph>{dayName}</Seats.Paragraph>
                <div>
                  <Seats.Date>{showDate}</Seats.Date>
                  <Seats.Date>{seat.seats.filter(place => !place.isAvailable).length}left</Seats.Date>
                </div>
                <Link to={`/${seat.destination}/${seat.id}`}>
                  <Seats.Button>Book a seat</Seats.Button>
                </Link>
              </Seats>
            </div>
          )
        })
      }
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TripBooking)

