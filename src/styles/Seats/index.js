import React from 'react'
import {Container , Title , Button  , Paragraph , Image} from "./style/Seats"

export default function Seats({children , ...restProps}) {
  return <Container {...restProps} >{children}</Container>
}

Seats.Title = function SeatsTitle ({children , ...restProps}) {
   return <Title {...restProps}>{children}</Title>
}

Seats.Button = function SeatsButton ({children , ...restProps}) {
   return <Button {...restProps}>{children}</Button>
}
Seats.Paragraph = function SeatsParagraph ({children , ...restProps}) {
   return <Paragraph {...restProps}>{children}</Paragraph>
}
Seats.Image = function SeatsImage ({children , ...restProps}) {
   return <Image {...restProps}>{children}</Image>
}
