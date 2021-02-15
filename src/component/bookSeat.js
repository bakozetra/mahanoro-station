import React , {useEffect, useRef , useState } from "react"
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {getCity} from "../actions/index"
import { Seats, SeatsBook } from "../styles";


function BookSeats ({getCity , city}) {
 const [isAvailable , setIseAvaible] = useState(false);
 const [count , SetCount] = useState(0);
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
              <SeatsBook.Button>Book {count} seats</SeatsBook.Button>
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
                  SetCount(count + 1)
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
      </>  )
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

