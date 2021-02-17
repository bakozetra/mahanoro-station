import React from "react"
import { useParams } from "react-router-dom";
import { Seats } from "../styles";
import { Link } from "react-router-dom"
import moment from 'moment';


export default function TripBooking({ city }) {
  let { seats } = useParams();
  let cityFilter = city?.filter(seat => seat.destination == seats);

  return (
    <div>
      {
        cityFilter?.map(seat => {
          const showDate = (moment(new Date(seat.departureTime)).format('DD-MMM-YYYY'));
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
                <Link to={`/${seat.destination}/${seat.id}`} >
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



