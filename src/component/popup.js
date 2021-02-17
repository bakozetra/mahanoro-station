import React from "react"
import { Popups } from "../styles"
import { Link } from "react-router-dom"
import { connect, useDispatch, useSelector} from "react-redux";
import {myAcount} from "../actions";

export default function Popup({ seat , countSeat , total}) {
  const addToAccoount = useSelector(state => state.confirmPlace )
  const disaptch =  useDispatch()
  let ChekIdAddToAccoount = addToAccoount?.filter(b => b.id === seat.id);
  
  const addToseats = () => {
    if(ChekIdAddToAccoount) {
      return (
      <Popups.Button  onClick={() => disaptch(myAcount(seat))}>Check your account </Popups.Button>
      )}
      else {
        return console.log("bey");
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
      <Link to="/count" total={total} countSeat={countSeat}>
        {addToseats()}
      </Link>
    </Popups.Form>
  </Popups>
)

}


