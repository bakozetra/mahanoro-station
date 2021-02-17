import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { myAcount, showmyAcount } from "../actions/index"
import { Accounts } from "../styles"
import CarImage from "../image/noto_bus.svg"
import moment from 'moment';
function Account({ count, addToAccoount, countSeat, total }) {
  console.log(addToAccoount);
  console.log(countSeat);
  console.log(total);

  return (
    <Accounts>
      <Accounts.Form>
        <Accounts.SubTitle>my personnal informations:</Accounts.SubTitle>
        <Accounts.Label>First name</Accounts.Label><br />
        <Accounts.Input></Accounts.Input><br />
        <Accounts.Label>Last name</Accounts.Label><br />
        <Accounts.Input></Accounts.Input><br />
        <Accounts.Label>Phone numberSeat</Accounts.Label><br />
        <Accounts.Input></Accounts.Input><br />
        <Accounts.Button>Update</Accounts.Button>
      </Accounts.Form>

      {
        addToAccoount?.map(mycount => {
          const showDate = (moment(new Date(mycount.departureTime)).format('DD-MMM-YYYY'));
          return (
            <Accounts.Content>
              <Accounts.Image src={CarImage} />
              <div>
                <Accounts.Paragraph>{mycount.destination}</Accounts.Paragraph>
                <Accounts.Paragraph>{showDate}</Accounts.Paragraph>
              </div>
              <div>
                <Accounts.Paragraph>{mycount.price} Ar</Accounts.Paragraph>
                <Accounts.Paragraph>seats</Accounts.Paragraph>
              </div>
              <Accounts.CancelButton>Cancel</Accounts.CancelButton>
            </Accounts.Content>
          )
        })
      }
    </Accounts>
  )
}

function mapStateToProps(globalState) {
  return {
    count: globalState.count,
    addToAccoount: globalState.confirmPlace
  }
}
const mapDispatchToProps = {
  showmyAcount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account)
