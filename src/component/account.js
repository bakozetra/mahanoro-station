import React ,{useState , useEffect} from "react"
import { connect } from "react-redux"
import {showmyAcount} from "../actions/index"
import { Accounts } from "../styles"
function Account({count , addToAccoount ,countSeat , total}) {
  console.log(addToAccoount);
  console.log(countSeat);
  console.log(total);
   return (
     <Accounts>
         <div>
       {
         count.map(place => {
           return (
             <p>{place.firstName}</p>
           )
         })
       }
     </div>
       <Accounts.SubTitle>my personnal informations:</Accounts.SubTitle>
       <Accounts.Label>First name</Accounts.Label><br/>
       <Accounts.Input></Accounts.Input><br/>
       <Accounts.Label>Last name</Accounts.Label><br/>
       <Accounts.Input></Accounts.Input><br/>
       <Accounts.Label>Phone numberSeat</Accounts.Label><br/>
       <Accounts.Input></Accounts.Input><br/>
       <Accounts.Button>Update</Accounts.Button>
       {
         addToAccoount?.map(b => {
           return <>
           <p>{b.destination}</p>
           <p>{b.departureTime}</p>
           <p>{b.price} Ar</p>
           <p>{countSeat} seats</p>
           </>
         })
       }
     </Accounts>
   )
}

function mapStateToProps(globalState) {
  return {
    count : globalState.count,
    addToAccoount : globalState.confirmPlace
  }
}
const mapDispatchToProps = {
  showmyAcount,
};

export default connect(mapStateToProps , mapDispatchToProps)(Account)
