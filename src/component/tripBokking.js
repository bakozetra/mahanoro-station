import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCity } from "../actions/index"
import { Seats } from "../styles";
import { Link } from "react-router-dom"


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
          console.log(seat.seats.length);
          return (
            <div>
              <h1>{seat.destination}</h1>
              <Seats>
                <Seats.Image/>
                <p>{seat.seats.length}</p>
                <Seats.Paragraph>{seat.departureTime}</Seats.Paragraph>
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

