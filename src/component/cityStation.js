import React , {useEffect} from "react"
import { connect } from "react-redux";
import {getCity , getDestiantion} from "../actions/index"
import { DesinationCity } from "../styles";
import {Link} from "react-router-dom"

function CityStation({city , getCity , direction}) {
  useEffect(() => {
    getCity();
  } , [])
 
  console.log(city);
  return (
  <>
    <DesinationCity.Title>Where are you going?</DesinationCity.Title>
    <DesinationCity>
      {
      direction.map(cit => {
        return <Link to="">
        <DesinationCity.Button>{cit.name}</DesinationCity.Button>
        </Link>
      })}
    </DesinationCity>
    </>
  )
  
}

function mapStateToProps(globalState) {
  return {
    city: globalState.city ,
    direction : globalState.destinationCity
  }
}
const mapDispatchToProps = {
	getCity ,
  getDestiantion
};

export default connect(mapStateToProps , mapDispatchToProps)(CityStation)