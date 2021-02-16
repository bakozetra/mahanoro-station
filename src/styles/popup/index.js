import React from 'react'
import {Container , Title , Button ,Paragraph , Form} from "./style/popup"

export default function Popups({children , ...restProps}) {
  return <Container {...restProps} >{children}</Container>
}

Popups.Title = function PopupsTitle ({children , ...restProps}) {
   return <Title {...restProps}>{children}</Title>
}
Popups.Button = function PopupsButton ({children , ...restProps}) {
   return <Button {...restProps}>{children}</Button>
}
Popups.Paragraph = function PopupsParagraph ({children , ...restProps}) {
   return <Paragraph {...restProps}>{children}</Paragraph>
}
Popups.Form = function PopupsForm ({children , ...restProps}) {
   return <Form {...restProps}>{children}</Form>
}