import React  from "react"
import { connect } from "react-redux";
import {getDestiantion} from "../actions/index"
import { Destiantions } from "../styles";
import {Link} from "react-router-dom"
import Carsvg from "../image/noto_bus.svg"

function CityStation({direction}) {
  return (
  <>
    <Destiantions.Content>
      <img src={Carsvg}/>
    <Destiantions.Title>Where are you going?</Destiantions.Title>
    </Destiantions.Content>
   
    <Destiantions>
      {
      direction.map(cit => {
        return <Link to={`/${cit.name}`}>
        <Destiantions.Button>{cit.name}</Destiantions.Button>
        </Link>
      })}
    </Destiantions>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    direction : globalState.destinationCity
  }
}
const mapDispatchToProps = {
  getDestiantion
};

export default connect(mapStateToProps , mapDispatchToProps)(CityStation)