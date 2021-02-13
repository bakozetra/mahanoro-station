import React from "react"
import {Button , Container , Title} from "./cityDestination"

export default function DesinationCity({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

DesinationCity.Button = function DesinationCityButton({children , ...restProps}) {
   return <Button {...restProps}>{children}</Button>
}
DesinationCity.Title = function DesinationCityTitle({children , ...restProps}) {
   return <Title {...restProps}>{children}</Title>
}

