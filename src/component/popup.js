import React from "react"
import { Popups } from "../styles"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {myAcount} from "../actions";
export default function Popup({ seat }) {
  const confirmSeats = useSelector(state => state.confirmPlace)
  const dispatch = useDispatch();
  function addToseats() {
    console.log(seat);
    console.log(seat.id);
    console.log(confirmSeats);
    const isAlreadyConfirm = confirmSeats.some((item) => item.id !== seat.id);
    console.log(isAlreadyConfirm);
    if (isAlreadyConfirm) {
      return <button
          onClick={() => dispatch(myAcount(seat))}>
      </button>
    }
    else {
      console.log("heloo");
    }
  }
 
 

return (
  <Popups>
    <Popups.Form>
      <Popups.Title>Booking comfirmed!</Popups.Title>
      <Popups.Paragraph>
        Thank you for trusting our services.
        Your booking has been added to your account. You can review it there.
      </Popups.Paragraph>
      <Link to={`/${seat.destination}/${seat.id}/count`}>
        <Popups.Button
         onClick={()  => addToseats()}
        >Check your account </Popups.Button>
       
      </Link>
    </Popups.Form>
  </Popups>
  // <div>
  //     <p>I am happy having you God</p>
  // </div>
)
}