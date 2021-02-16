import React , {useEffect, useRef , useState } from "react"
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {getCity} from "../actions/index"
import { SeatsBook } from "../styles";
import Popup from "./popup"


function BookSeats ({city}) {
 const [isAvailable , setIseAvaible] = useState(false);
 const [count , SetCount] = useState(0);
 const [total , setTotal] = useState(0);
 const [showPopup , setShowPopup] = useState(false)
 const mee = useRef(null)
 console.log(isAvailable);
  let {booking} = useParams();
 
  let cityFilter = city?.filter(seat => seat.id == booking);
  console.log(cityFilter);
  useEffect(() => {
    getCity()
  } , [])
   
  console.log(city);
  return (
     
    <>
      {
      cityFilter?.map(seat => {
        return (
          <>
           {
                  showPopup && (
                    <Popup seat={seat}></Popup>
                  )
                }
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
              <SeatsBook.Button
               onClick={() => setShowPopup(!showPopup)}
              >
                Book {count} seats
              </SeatsBook.Button>
              <p>Total : {total} Ar</p>
             </SeatsBook.Container>
             <SeatsBook.SelectButtonSeat>
             {seat.seats.map(place => {
               console.log(place);
               console.log(place.isAvailable);
               function CheckPlace(e) {
                if(place.isAvailable == !isAvailable) {
                  setIseAvaible(true)
                  e.target.style.backgroundColor = "rgba(234, 130, 130, 1)"
                }
                else {
                  setIseAvaible(false);
                  SetCount(count + 1);
                  setTotal((count + 1)   * `${seat.price}`)
                }
              }
            
               return (
                 <>
                 <button
                  ref={mee}
                 disabled={isAvailable}
                 onClick={(e) => CheckPlace(e)}
                 >{place.isAvailable == !isAvailable ? <button style={{ backgroundColor: "#44014C"}}>
                   💺
                 </button> : <button>💺</button> }</button>
                </>
               )
             })}
             </SeatsBook.SelectButtonSeat>
          </SeatsBook>
      </>)
      })
      }
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

export default connect(mapStateToProps , mapDispatchToProps)(BookSeats)

