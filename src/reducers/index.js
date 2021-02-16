import { combineReducers } from "redux"

export function city(state = [] , action ) {
   switch(action.type) {
     case "GET_CITY": 
     console.log(action.value);
     return action.value 
     default : 
     return state
   }
}

export function count(state =[] , action) {
  console.log(state);
   switch(action.type) {
     case 'SHOW_ACCOUNT': 
     return [...state, action.value]
     default : 
     return state
   }
}
export function confirmPlace(state =[] , action) {
  console.log(state);
   switch(action.type) {
     case 'CONFIRM_PLACE': 
     return [...state, action.value]
     default : 
     return state
   }
}

export function  destinationCity(state=[] , action) {
  console.log(state);
  switch(action.type) {
    case "DESTINATION_CITY" :
      return action.value
    default : 
    return state
  }
}


export default combineReducers({
  city ,
  count ,
  destinationCity,
  confirmPlace

})
