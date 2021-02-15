import React from 'react'
import {Container , List , Paragraph , SelectButtonSeat , Section , Button} from "./style/SeatsBook"

export default function SeatsBook({children , ...restProps}) {
  return <Section {...restProps} >{children}</Section>
}

SeatsBook.List = function SeatsBookList ({children , ...restProps}) {
   return <List {...restProps}>{children}</List>
}
SeatsBook.Paragraph = function SeatsBookParagraph ({children , ...restProps}) {
   return <Paragraph {...restProps}>{children}</Paragraph>
}
SeatsBook.SelectButtonSeat = function SeatsBookSelectButtonSeat ({children , ...restProps}) {
   return <SelectButtonSeat {...restProps}>{children}</SelectButtonSeat>
}
SeatsBook.Container = function SeatsBookContainer ({children , ...restProps}) {
   return <Container {...restProps}>{children}</Container>
}
SeatsBook.Button = function SeatsBookButton ({children , ...restProps}) {
   return <Button {...restProps}>{children}</Button>
}



