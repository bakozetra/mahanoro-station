import React, { useRef, useState } from "react"
import { useParams } from "react-router-dom";
import { SeatsBook } from "../styles";
import Popup from "./popup"
import ImageSeat from "../image/emojione_seat.svg"


export default function BookSeats({ city }) {
  const [isAvailable, setIseAvaible] = useState(false);
  const [countSeat, SetCountSeat] = useState(0);
  const [total, setTotal] = useState(0);
  const [showPopup, setShowPopup] = useState(false)
  const mee = useRef(null)
  let { booking } = useParams();
  let cityFilter = city?.filter(seat => seat.id == booking);
  return (
    <>
      {
        cityFilter.map(seat => {
          console.log(countSeat);
          return (
            <>
              <h1>Book a seat to : {seat.destination} </h1>
              <SeatsBook>
                <SeatsBook.Container>
                  <SeatsBook.List>
                    <SeatsBook.Paragraph>DepartureTime :</SeatsBook.Paragraph>
                    <SeatsBook.Paragraph>{seat.departureTime}</SeatsBook.Paragraph>
                  </SeatsBook.List>
                  <SeatsBook.List>
                    <SeatsBook.Paragraph>Driver :</SeatsBook.Paragraph>
                    <SeatsBook.Paragraph>{seat.driverName}</SeatsBook.Paragraph>
                  </SeatsBook.List>
                  <SeatsBook.List>
                    <SeatsBook.Paragraph>Driver's contact</SeatsBook.Paragraph>
                    <SeatsBook.Paragraph> {seat.driverContact}</SeatsBook.Paragraph>
                  </SeatsBook.List>
                  <SeatsBook.List>
                    <SeatsBook.Paragraph>Estimate duration :</SeatsBook.Paragraph>
                    <SeatsBook.Paragraph>{seat.estimatedDuration}</SeatsBook.Paragraph>
                  </SeatsBook.List>
                  <SeatsBook.List>
                    <SeatsBook.Paragraph>Breaks :</SeatsBook.Paragraph>
                    <SeatsBook.Paragraph>{seat.breaks}</SeatsBook.Paragraph>
                  </SeatsBook.List>
                  <SeatsBook.List>
                    <SeatsBook.Paragraph>Price : {seat.price} Ar</SeatsBook.Paragraph>
                  </SeatsBook.List>
                  <SeatsBook.Button onClick={() => setShowPopup(!showPopup)}>
                    Book {countSeat} seats
                  </SeatsBook.Button>
                  <p>Total : {total} Ar</p>
                </SeatsBook.Container>
                <SeatsBook.SelectButtonSeat>
                  {seat.seats.map(place => {
                    const CheckPlace = (e) => {
                      if (place.isAvailable == !isAvailable) {
                        setIseAvaible(true)
                        e.target.style.backgroundColor = "rgba(234, 130, 130, 1)"
                      }
                      else {
                        setIseAvaible(false);
                        SetCountSeat(countSeat + 1);
                        setTotal((countSeat + 1) * `${seat.price}`)
                      }
                    }
                    return (
                      <>
                        <button
                          ref={mee}
                          disabled={isAvailable}
                          onClick={(e) => CheckPlace(e)}>
                          {place.isAvailable == !isAvailable ? <button style={{ backgroundColor: "red" }}>
                            <img src={ImageSeat} />
                          </button> : <img src={ImageSeat} />}</button>
                      </>
                    )
                  })}
                </SeatsBook.SelectButtonSeat>
                {
                  showPopup && (
                    <Popup countSeat={countSeat} seat={seat} total={total}></Popup>
                  )
                }
              </SeatsBook>
            </>)
        })
      }
    </>
  )
}





